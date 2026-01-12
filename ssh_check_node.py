import paramiko
import sys

HOSTNAME = "65.108.37.209"
USERNAME = "mrapps"
PASSWORD = "h7@e8CYUY2[2"
PORT = 22

print(f"Connecting to {HOSTNAME}...")
try:
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOSTNAME, port=PORT, username=USERNAME, password=PASSWORD, timeout=10)
    print("[SUCCESS] SSH Login Successful!")
    
    stdin, stdout, stderr = client.exec_command("node -v")
    print(f"Node Version: {stdout.read().decode().strip()}")
    
    stdin, stdout, stderr = client.exec_command("pm2 list")
    print(f"PM2 List:\n{stdout.read().decode().strip()}")
    
    client.close()
except Exception as e:
    print(f"[FAIL] SSH Login Failed: {e}")
