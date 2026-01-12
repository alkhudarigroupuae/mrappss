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

def write_file(filename, content):
    print(f"\n--- Writing {filename} ---")
    URL = f"https://{TARGET_IP}:{PORT}/execute/Fileman/save_file_content"
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

# Proxy .htaccess
proxy_htaccess = """<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^$ http://127.0.0.1:8000/ [P,L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://127.0.0.1:8000/$1 [P,L]
</IfModule>
"""

write_file(".htaccess", proxy_htaccess)
