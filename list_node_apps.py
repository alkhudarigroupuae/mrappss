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

auth_str = f"{USER}:{PASS}"
base64_string = base64.b64encode(auth_str.encode("ascii")).decode("ascii")

headers = {
    "Authorization": f"Basic {base64_string}",
    "User-Agent": "Mozilla/5.0"
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def list_apps():
    print(f"\n--- Listing Node.js Applications ---")
    # UAPI ApplicationManager::list_applications
    URL = f"https://{TARGET_IP}:{PORT}/execute/ApplicationManager/list_applications"
    
    req = urllib.request.Request(URL, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data.get('status') == 1:
                apps = data.get('data', [])
                print(f"Found {len(apps)} apps.")
                for app in apps:
                    print(f"- {app.get('application_uri')} -> {app.get('documentroot')}")
            else:
                print(f"[FAIL] {data.get('errors')}")
    except Exception as e:
        print(f"[ERROR] {e}")

list_apps()
