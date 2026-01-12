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
DOC_ROOT = "/home/mrapps/it.mr-appss.com"

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

read_file(DOC_ROOT, ".htaccess")
read_file(DOC_ROOT, "package.json")
content_app = read_file(DOC_ROOT, "app.js")
if content_app:
    print(content_app[:1000])

print("\n--- Log File ---")
log = read_file(DOC_ROOT, "stderr.log")
if log:
    print(log[-2000:]) # Last 2000 chars
