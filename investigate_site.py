import socket
import urllib.request
import urllib.error
import ssl
import json
import base64

# Configuration
TARGET_IP = "65.108.37.209"
USER = "mrapps"
PASS = "h7@e8CYUY2[2"
PORT = 2083
DOMAIN = "mr-appss.com"

# 1. Check DNS Resolution
print(f"--- Checking DNS for {DOMAIN} ---")
try:
    domain_ip = socket.gethostbyname(DOMAIN)
    print(f"Domain {DOMAIN} resolves to: {domain_ip}")
    if domain_ip == TARGET_IP:
        print("[MATCH] Domain points to our server.")
    else:
        print(f"[WARNING] Domain points to {domain_ip}, but our server is {TARGET_IP}.")
except Exception as e:
    print(f"[ERROR] Could not resolve domain: {e}")

# 2. List Domains in cPanel to find Document Root
print(f"\n--- Fetching Domain Info from cPanel (single_domain_data) ---")
# Try single_domain_data
URL = f"https://{TARGET_IP}:{PORT}/execute/DomainInfo/single_domain_data?domain={DOMAIN}"

auth_str = f"{USER}:{PASS}"
base64_string = base64.b64encode(auth_str.encode("ascii")).decode("ascii")

headers = {
    "Authorization": f"Basic {base64_string}",
    "User-Agent": "Mozilla/5.0"
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(URL, headers=headers)

try:
    target_doc_root = None
    with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
        content = response.read().decode('utf-8')
        data = json.loads(content)
        
        # print("Response Data:", json.dumps(data, indent=2))
        
        if data.get('status') == 1:
            target_doc_root = data.get('data', {}).get('documentroot')
            print(f"[SUCCESS] Found Document Root: {target_doc_root}")
        else:
            print(f"[WARNING] single_domain_data failed: {data.get('errors')}")
            # Fallback: Guessing
            print("Fallback: Checking common paths...")
            target_doc_root = f"/home/{USER}/public_html/{DOMAIN}" # Common for addons

    if target_doc_root:
        # Now list files in that directory
        print(f"\n--- Listing files in {target_doc_root} ---")
        
        FILE_URL = f"https://{TARGET_IP}:{PORT}/execute/Fileman/list_files"
        FILE_URL += f"?dir={urllib.parse.quote(target_doc_root)}"
        
        file_req = urllib.request.Request(FILE_URL, headers=headers)
        try:
            with urllib.request.urlopen(file_req, context=ctx, timeout=15) as f_res:
                f_content = f_res.read().decode('utf-8')
                f_data = json.loads(f_content)
                
                if f_data.get('status') == 1:
                    files = f_data.get('data', [])
                    print(f"Found {len(files)} items.")
                    
                    has_projects = False
                    has_products = False
                    
                    for f in files:
                        fname = f.get('file')
                        ftype = f.get('type')
                        print(f" - {fname} [{ftype}]")
                        
                        if "project" in fname.lower():
                            has_projects = True
                        if "product" in fname.lower():
                            has_products = True
                    
                    print("-" * 20)
                    if not has_projects:
                        print("[ALERT] No 'projects' file or directory found.")
                    else:
                        print("[OK] 'projects' found.")
                        
                    if not has_products:
                        print("[ALERT] No 'products' file or directory found.")
                    else:
                        print("[OK] 'products' found.")

                else:
                    print(f"[FAIL] Could not list files: {f_data.get('errors')}")
                    print(f"Note: Directory {target_doc_root} might not exist.")
        except urllib.error.HTTPError as e:
             print(f"[ERROR] listing files: {e}")

    else:
        print("[FAIL] Could not determine document root.")

except Exception as e:
    print(f"[ERROR] Connection failed: {e}")
    traceback.print_exc() 

