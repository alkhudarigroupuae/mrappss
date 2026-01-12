import urllib.request
import urllib.parse
import urllib.error
import ssl
import json
import base64
import re

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

def read_file(directory, filename):
    print(f"\n--- Reading {directory}/{filename} ---")
    URL = f"https://{TARGET_IP}:{PORT}/execute/Fileman/get_file_content"
    params = urllib.parse.urlencode({"dir": directory, "file": filename})
    FULL_URL = f"{URL}?{params}"
    req = urllib.request.Request(FULL_URL, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data.get('status') == 1:
                return data.get('data', {}).get('content')
            else:
                print(f"[FAIL] Could not read file: {data.get('errors')}")
                return None
    except Exception as e:
        print(f"[ERROR] {e}")
        return None

js_dir = f"{DOC_ROOT}/static/js"
js_file = "main.b6792d70.js"
js_content = read_file(js_dir, js_file)

if js_content:
    print("\n--- Extracting URLs ---")
    # Find all http/https URLs
    urls = re.findall(r'https?://[^\s"\']+', js_content)
    unique_urls = set()
    for u in urls:
        # Clean up trailing characters that might be part of minified code
        clean_u = u.split('"')[0].split("'")[0].split(')')[0]
        unique_urls.add(clean_u)
    
    print("Found URLs:")
    for u in unique_urls:
        print(f"- {u}")

    print("\n--- Looking for 'Bo' definition (API Base URL?) ---")
    # Looking for assignments like Bo="value" or Bo='value'
    # Since it's minified, it might be difficult, but let's try a small context around "projects/get" again
    # to see if we can trace Bo
    
    # We saw: "".concat(Bo,"projects/get?page=")
    # Let's find that exact spot and look backwards
    
    search_str = 'concat(Bo,"projects/get'
    idx = js_content.find(search_str)
    if idx != -1:
        print(f"Found usage at index {idx}")
        # Look at 500 chars before
        start = max(0, idx - 1000)
        context = js_content[start:idx]
        print(f"Context before usage:\n{context[-500:]}")
        
        # Try to regex find Bo=... in this chunk or the whole file if rare
        # Minified variables are reused, so Bo might be defined globally or in a closure.
        # Let's look for `Bo=`
        
        assign_matches = re.findall(r'Bo\s*=\s*["\']([^"\']+)["\']', js_content)
        if assign_matches:
            print(f"\nPotential assignments to Bo: {assign_matches}")
        else:
            print("\nNo direct string assignment to Bo found.")
            
    else:
        print("Could not find the exact usage string again.")

