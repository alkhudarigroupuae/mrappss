import urllib.request
import urllib.error
import ssl
import json

TARGET_IP = "65.108.37.209"
API_TOKEN = "3YWG39GMAYOCSEHQBME3OFY8ZO0G156U"
USER = "root"

# WHM API Endpoint (secure)
# trying applist to see available apps, or version
URL = f"https://{TARGET_IP}:2087/json-api/version?api.version=1"

print(f"Attempting WHM connection to {TARGET_IP} as user '{USER}'...")

headers = {
    "Authorization": f"whm {USER}:{API_TOKEN}",
    "User-Agent": "Mozilla/5.0"
}

# Ignore SSL verification for IP-based connection
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
            if 'metadata' in data:
                print("\n[SUCCESS] Authentication successful! WHM Version accessed.")
            else:
                print("\n[FAIL] Authentication failed or unexpected response structure.")
        except json.JSONDecodeError:
            print("\n[FAIL] Response is not JSON.")

except urllib.error.HTTPError as e:
    print(f"\n[ERROR] HTTP Error: {e.code} - {e.reason}")
    # print("Headers:", e.headers)
    try:
        err_content = e.read().decode('utf-8')
        print("Error Body:", err_content)
    except:
        pass
        
except Exception as e:
    print(f"\n[ERROR] Connection Error: {e}")
