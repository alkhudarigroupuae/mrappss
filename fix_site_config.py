import urllib.request
import urllib.parse
import urllib.error
import ssl
import json
import base64

# Configuration
TARGET_IP = "65.108.37.209"
USER = "mrapps"
PASS = "h7@e8CYUY2[2"
PORT = 2083
DOC_ROOT = "/home/mrapps/mr-appss.com"

auth_str = f"{USER}:{PASS}"
base64_string = base64.b64encode(auth_str.encode("ascii")).decode("ascii")

headers = {
    "Authorization": f"Basic {base64_string}",
    "User-Agent": "Mozilla/5.0"
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def read_file(filename):
    print(f"\n--- Reading {filename} ---")
    URL = f"https://{TARGET_IP}:{PORT}/execute/Fileman/get_file_content"
    
    # POST payload
    payload = {
        "dir": DOC_ROOT,
        "file": filename
    }
    
    # For Fileman/get_file_content, usually GET works with params
    # But let's try POST encoding properly if GET fails or use params in URL
    
    params = urllib.parse.urlencode(payload)
    FULL_URL = f"{URL}?{params}"
    
    req = urllib.request.Request(FULL_URL, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data.get('status') == 1:
                content = data.get('data', {}).get('content')
                print(f"[SUCCESS] Read {len(content)} bytes.")
                return content
            else:
                print(f"[FAIL] Could not read file: {data.get('errors')}")
                return None
    except Exception as e:
        print(f"[ERROR] {e}")
        return None

def write_file(filename, content):
    print(f"\n--- Writing {filename} ---")
    URL = f"https://{TARGET_IP}:{PORT}/execute/Fileman/save_file_content"
    
    # POST is required for save_file_content
    # We need to send form-data or x-www-form-urlencoded
    
    data = {
        "dir": DOC_ROOT,
        "file": filename,
        "content": content
    }
    encoded_data = urllib.parse.urlencode(data).encode('utf-8')
    
    req = urllib.request.Request(URL, data=encoded_data, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            if res_data.get('status') == 1:
                print(f"[SUCCESS] File saved successfully.")
                return True
            else:
                print(f"[FAIL] Could not save file: {res_data.get('errors')}")
                return False
    except Exception as e:
        print(f"[ERROR] {e}")
        return False

# 1. Check index.html to see if it looks like React
index_content = read_file("index.html")
if index_content:
    print("Preview of index.html:")
    print(index_content[:500])
    if "root" in index_content or "react" in index_content.lower() or "asset-manifest" in index_content:
        print("\n[ANALYSIS] Looks like a React/SPA application.")
    else:
        print("\n[ANALYSIS] Does not strictly look like a standard React App, but might be another SPA.")

# 2. Check/Write .htaccess
htaccess_content = read_file(".htaccess")
if htaccess_content:
    print("Current .htaccess content:")
    print(htaccess_content)
else:
    print(".htaccess does not exist or is empty.")

# Prepare React Rewrite Rules
react_rules = """<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
"""

if not htaccess_content or "RewriteRule . /index.html" not in htaccess_content:
    print("\n[ACTION] Applying React/SPA rewrite rules to .htaccess...")
    # Append or overwrite? Overwrite is safer for a broken site, but let's be careful.
    # If file didn't exist, we create it.
    write_file(".htaccess", react_rules)
else:
    print("\n[INFO] .htaccess already contains rewrite rules.")
