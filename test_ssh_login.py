import paramiko
import sys

hostname = "litespeed.alkhudarigroup.com"
port = 22
username = "mrapps"
password = "h7@e8CYUY2[2"

print(f"Attempting SSH connection to {hostname} ({username})...")

try:
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    client.connect(hostname, port=port, username=username, password=password, timeout=10)
    print("\n[SUCCESS] SSH Authentication successful!")
    
    # Run a simple command
    stdin, stdout, stderr = client.exec_command("ls -la .ssh")
    print("\nListing .ssh directory:")
    print(stdout.read().decode())
    
    client.close()
    
except paramiko.AuthenticationException:
    print("\n[FAIL] Authentication failed. Password might be rejected if Key-based auth is enforced.")
except Exception as e:
    print(f"\n[ERROR] Connection failed: {e}")
