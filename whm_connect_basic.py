import urllib.request
import urllib.error
import ssl
import json
import base64

TARGET_IP = "65.108.37.209"
USER = "mrapps"
PASS = "h7@e8CYUY2[2"

# cPanel port is 2083
PORT = 2083
# Try listing apps - usually available
URL = f"https://{TARGET_IP}:{PORT}/execute/Applist/list_apps"

print(f"Attempting cPanel connection to {TARGET_IP}:{PORT} as user '{USER}'...")

# Basic Auth
auth_str = f"{USER}:{PASS}"
auth_bytes = auth_str.encode("ascii")
base64_bytes = base64.b64encode(auth_bytes)
base64_string = base64_bytes.decode("ascii")

headers = {
    "Authorization": f"Basic {base64_string}",
    "User-Agent": "Mozilla/5.0"
}

# Ignore SSL
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(URL, headers=headers)

try:
    with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
        status = response.getcode()
        print(f"Status Code: {status}")
        content = response.read().decode('utf-8')
        print("Response Body Snippet:")
        print(content[:500])
        
        try:
            data = json.loads(content)
            if 'status' in data and data['status'] == 1:
                print("\n[SUCCESS] Authentication successful! cPanel App List accessed.")
            elif 'errors' in data:
                 print(f"\n[FAIL] cPanel Error: {data['errors']}")
            else:
                print("\n[INFO] Response received (check output).")
        except json.JSONDecodeError:
            print("\n[FAIL] Response is not JSON.")

except urllib.error.HTTPError as e:
    print(f"\n[ERROR] HTTP Error: {e.code} - {e.reason}")
    try:
        print("Error Body:", e.read().decode('utf-8'))
    except:
        pass
except Exception as e:
    print(f"\n[ERROR] Connection Error: {e}")
