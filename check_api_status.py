import socket
import urllib.request
import urllib.error
import ssl

# Configuration
DOMAIN = "it.mr-appss.com"
API_URL = "https://it.mr-appss.com/api/projects/get"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

print(f"--- Checking DNS for {DOMAIN} ---")
try:
    ip = socket.gethostbyname(DOMAIN)
    print(f"IP: {ip}")
except Exception as e:
    print(f"DNS Error: {e}")

print(f"\n--- Checking API URL: {API_URL} ---")
try:
    req = urllib.request.Request(API_URL, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
    with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
        print(f"Status: {response.status}")
        print(f"Content: {response.read().decode('utf-8')[:200]}")
except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} - {e.reason}")
    try:
        print(f"Error Body: {e.read().decode('utf-8')[:200]}")
    except:
        pass
except Exception as e:
    print(f"Error: {e}")
