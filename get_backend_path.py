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

def get_domain_info(domain):
    print(f"\n--- Getting Info for {domain} ---")
    URL = f"https://{TARGET_IP}:{PORT}/execute/DomainInfo/single_domain_data"
    params = urllib.parse.urlencode({"domain": domain})
    FULL_URL = f"{URL}?{params}"
    
    req = urllib.request.Request(FULL_URL, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data.get('status') == 1:
                return data.get('data')
            else:
                print(f"[FAIL] {data.get('errors')}")
                return None
    except Exception as e:
        print(f"[ERROR] {e}")
        return None

info = get_domain_info("it.mr-appss.com")
if info:
    print(f"Document Root: {info.get('documentroot')}")
    print(f"Format: {info.get('format')}")
