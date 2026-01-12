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
                return data.get('data', {}).get('content')
            else:
                print(f"[FAIL] Could not read file: {data.get('errors')}")
                return None
    except Exception as e:
        print(f"[ERROR] {e}")
        return None

# Check for error_log (standard cPanel PHP error log)
print("Checking for error_log...")
log = read_file(DOC_ROOT, "error_log")
if log:
    print(log[-1000:])

print("Checking for stderr.log again...")
log2 = read_file(DOC_ROOT, "stderr.log")
if log2:
    print(log2[-1000:])

print("Checking for node_debug.log...")
log3 = read_file(DOC_ROOT, "node_debug.log")
if log3:
    print(log3[-1000:])
