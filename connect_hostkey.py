import urllib.request
import urllib.error
import sys

# The API Key provided
SERVER_KEY = "PEVD5C72F74VTYJHQUQDZ19UM5ZWZOR8"
TARGET_IP = "65.108.37.209"

# Hostkey Server Control Panel URL
PANEL_URL = f"https://panel.hostkey.com/?key={SERVER_KEY}"

def check_connection():
    print(f"Checking connection to Hostkey Panel with key ending in ...{SERVER_KEY[-5:]}")
    print(f"URL: {PANEL_URL}")
    
    # User-Agent to mimic a browser
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    req = urllib.request.Request(PANEL_URL, headers=headers)
    
    try:
        with urllib.request.urlopen(req) as response:
            status = response.getcode()
            print(f"\n[SUCCESS] Connection established! Status Code: {status}")
            print("The server key appears to be valid and the panel is accessible.")
            
    except urllib.error.HTTPError as e:
        print(f"\n[ERROR] Hostkey Panel HTTP Error: {e.code} - {e.reason}")
        if e.code == 403:
            print("Reason: Access Forbidden (IP not whitelisted).")

    except urllib.error.URLError as e:
        print(f"\n[ERROR] Hostkey Panel Connection Failed: {e.reason}")

    # Also check the IP directly just in case it's a direct panel
    print(f"\nChecking IP {TARGET_IP} directly...")
    for proto in ["http", "https"]:
        url = f"{proto}://{TARGET_IP}"
        print(f"Trying {url}...")
        try:
            req_ip = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req_ip, timeout=5) as response:
                print(f"[SUCCESS] {url} is accessible. Code: {response.getcode()}")
        except Exception as e:
            print(f"[FAIL] {url}: {e}")

if __name__ == "__main__":
    check_connection()
