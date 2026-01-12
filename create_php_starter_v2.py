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

php_content = """<?php
echo "<h2>Node Starter V2</h2>";

$paths = [
    '/usr/bin/node',
    '/usr/local/bin/node',
    '/bin/node',
    '/opt/cpanel/ea-nodejs10/bin/node',
    '/opt/cpanel/ea-nodejs16/bin/node',
    '/opt/cpanel/ea-nodejs18/bin/node',
    '/opt/cpanel/ea-nodejs20/bin/node'
];

$node_bin = null;
foreach ($paths as $p) {
    if (file_exists($p)) {
        echo "Found node at: $p<br>";
        $node_bin = $p;
        break;
    }
}

if (!$node_bin) {
    echo "Node binary not found in common paths.<br>";
    // Try to find it via shell
    $out = shell_exec('find /opt -name node -type f 2>/dev/null | head -n 1');
    if ($out) {
        $node_bin = trim($out);
        echo "Found via find: $node_bin<br>";
    }
}

if ($node_bin) {
    echo "Starting app with $node_bin...<br>";
    $cmd = "cd " . __DIR__ . " && nohup $node_bin app.js > node_debug.log 2>&1 &";
    exec($cmd);
    echo "Executed: $cmd";
} else {
    echo "Could not find node binary.";
}
?>"""

write_file("start_node.php", php_content)
