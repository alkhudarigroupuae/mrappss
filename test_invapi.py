import urllib.request
import urllib.parse
import urllib.error
import json
import ssl

key = "3YWG39GMAYOCSEHQBME3OFY8ZO0G156U"
url = "https://invapi.hostkey.com/auth/login"

print(f"Testing Invapi auth on {url} with key: {key[:5]}...")

# Try as JSON first
data = json.dumps({"key": key}).encode('utf-8')

# Standard context for domain connection
ctx = ssl.create_default_context()

req = urllib.request.Request(
    url, 
    data=data, 
    headers={
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'application/json'
    },
    method='POST'
)

try:
    with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
        print(f"Status: {response.getcode()}")
        print(response.read().decode('utf-8'))
        print("\n[SUCCESS] Invapi connection accepted.")
except urllib.error.HTTPError as e:
    print(f"Error: {e.code} - {e.reason}")
    print(e.read().decode('utf-8'))
except Exception as e:
    print(f"Connection failed: {e}")
