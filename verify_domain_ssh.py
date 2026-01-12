import socket
import sys

hostname = "litespeed.alkhudarigroup.com"
port = 22

print(f"Resolving {hostname}...")
try:
    ip = socket.gethostbyname(hostname)
    print(f"IP Address: {ip}")
    
    print(f"Checking SSH port {port} on {ip}...")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(5)
    result = sock.connect_ex((ip, port))
    if result == 0:
        print(f"[SUCCESS] Port {port} is OPEN. SSH is running.")
    else:
        print(f"[FAIL] Port {port} is CLOSED or filtered.")
    sock.close()
    
except socket.gaierror:
    print(f"[FAIL] Could not resolve hostname {hostname}")
except Exception as e:
    print(f"[ERROR] {e}")

# Check for paramiko
try:
    import paramiko
    print("\n[INFO] 'paramiko' library is available. I can attempt SSH login test if requested.")
except ImportError:
    print("\n[INFO] 'paramiko' library is NOT installed. Cannot perform automated SSH login test.")
