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
                content = data.get('data', {}).get('content')
                print(f"[SUCCESS] Read {len(content)} bytes.")
                return content
            else:
                print(f"[FAIL] Could not read file: {data.get('errors')}")
                return None
    except Exception as e:
        print(f"[ERROR] {e}")
        return None

def check_url_status(url):
    print(f"\n--- Checking URL: {url} ---")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            print(f"Status Code: {response.status}")
            print(f"URL Content Type: {response.headers.get('Content-Type')}")
            content = response.read().decode('utf-8', errors='ignore')
            print(f"Content Preview: {content[:200]}")
            return content
    except urllib.error.HTTPError as e:
        print(f"HTTP Error: {e.code} - {e.reason}")
        return None
    except Exception as e:
        print(f"Error checking URL: {e}")
        return None

# 1. Verify .htaccess
htaccess_content = read_file(DOC_ROOT, ".htaccess")
if htaccess_content:
    print("--- Current .htaccess Content ---")
    print(htaccess_content)
    if "RewriteRule . /index.html" in htaccess_content:
        print("[OK] Rewrite rule for SPA found.")
    else:
        print("[WARN] Rewrite rule for SPA MISSING or different.")

# 2. Check URL Status
check_url_status("https://mr-appss.com/projects")
check_url_status("https://mr-appss.com/project")

# 3. Analyze JS for routes
js_dir = f"{DOC_ROOT}/static/js"
js_file = "main.b6792d70.js"
js_content = read_file(js_dir, js_file)

if js_content:
    print("\n--- Searching for Route definitions in JS ---")
    # Look for path: "/something" or path="/something" or path: '/something'
    # Regex: path\s*[:=]\s*["']\/([a-zA-Z0-9_-]+)["']
    
    matches = re.findall(r'path\s*[:=]\s*["\']\/([a-zA-Z0-9_-]+)["\']', js_content)
    if matches:
        print("Found potential routes:")
        for m in set(matches):
            print(f" - /{m}")
    else:
        print("No simple route patterns found. Trying context search...")
        
    # Search for "projects" context
    indices = [m.start() for m in re.finditer('projects', js_content)]
    for idx in indices[:5]: # Show first 5 occurrences
        start = max(0, idx - 50)
        end = min(len(js_content), idx + 50)
        print(f"...{js_content[start:end]}...")
