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

def add_cron(command):
    print(f"\n--- Adding Cron Job ---")
    URL = f"https://{TARGET_IP}:{PORT}/execute/Cron/add_line"
    params = urllib.parse.urlencode({"command": command, "day": "*", "hour": "*", "minute": "*", "month": "*", "weekday": "*"})
    FULL_URL = f"{URL}?{params}"
    
    req = urllib.request.Request(FULL_URL, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data.get('status') == 1:
                print(f"[SUCCESS] Cron added: {data.get('data')}")
            else:
                print(f"[FAIL] {data.get('errors')}")
    except Exception as e:
        print(f"[ERROR] {e}")

# Try to find node path first? 
# We'll try generic 'node' assuming it's in path, or /usr/bin/node
cmd = "cd /home/mrapps/it.mr-appss.com && (/usr/bin/node app.js || node app.js) >> node_debug.log 2>&1"
add_cron(cmd)
