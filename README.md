# SunroomBot Backend (Secure)

This is a secure Node.js + Express backend that connects to the Google Sheets API using service account credentials via environment variable.

## 🚀 How to Deploy on Render

1. Push this folder to GitHub (excluding any JSON key file!)
2. In Render:
   - **New Web Service** → Connect your GitHub repo
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Environment Variable:**
     - Key: `GOOGLE_SERVICE_KEY`
     - Value: (Paste the entire JSON below as one line — see next step)

3. Set this as your `GOOGLE_SERVICE_KEY`:

```
{"type": "service_account", "project_id": "sunroombotapi", "private_key_id": "3346c82b1c725339613cae61282bc9b43f9e5818", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDdnIKCZdgOJzel\nEAse8zBm7TN6gYrSl7k4o+eEe3jSl6/cNwGcMqdFq7zVcRk6EYmUKfR/J3g470js\nM2aw+7v/WyBp7fJl5PU7eH5X2PtEGuGgdrUaeWXmPkmlr0t/Fp8lBeGX+cLdDZds\nZanhY+wrnLmbrKnzv3GmQPpZ4wHHoc41zRKTyyk1cp7Fzbs07hAWjczuq+4R3xGC\nl9yjUoE+1tpJche/QXBVDrDEeLwOXrRos50XIwf0xCqBKUdlWB/zAoiN/3DeX5hk\naTC4+J6dgv2YBvlSN51q+ivHSOpbv7njnyj85nsXMkFSA2e4f6dTzJREs6gKa7yA\nyRRZtdlPAgMBAAECggEAN5rZtFZRi9uTPrtzzuQ+NNU3oXl3l7eyJeAaa0d/3Xdq\nDNtQcBzVk8mvq+6g4c0ctCyCyJTiuYZwybNsBORlG4GF9I5bz+1PCwkEyo4LHd+Q\n1W5zqpzjUI44dHYzf0Px0pxTKorktgp/ABfSNFeaHqdIeyMr0ZkrrweGyZ8IB0q+\nkf3FywI+IJah0XrHnC6bb2IKyqA22D2MXkQ7bv43hnjcuAsj4FgrHJ7RCW+WWmwE\nuya+wgSxtZAGg26bgvKlCjx/12F8QfQoEzfRUFNVKLLQddRduvsmb791diuJU3S9\nKKk5nT1JrpgSJhZ9Lzhnu1D59YTjveK8OP6itOa1QQKBgQD3TlJaOBAZczgaD6ra\n8dnnfCfuDgy/0SEtqZ9tWvfX/oPbZdQfg/cCAz3ATW/4LB6bMqAltgZ/xUri1Mrc\n0E0uimsTjL+0qWF3GENGQRV33vrfUgq4O5h6p5zB/vw4eIscN43y4rajRmTYBY40\nSSdFMQrN/3rwOH8hr2e3mAmYFwKBgQDlZvHZiYACk0OCp54YYp25Kuh7uuaFfSOx\n+HiAa2M3KIfAqlQ9rEBZ8cNGpTr1q4nnaBasvAl7Iq5VoXQqavnBkeqOyY6jrjrQ\nSpfNkme0iXn26FDDntvkInynp8cxEAJaVZi98Prdy6s2Y40ACLJCEe63CYVK/Npz\nZ2lGiFxTiQKBgQC4evyDwH6B/alEB5v0Z6WdQMiolGJ+VIrjfT0oXku0HHBQIc3z\nFIYWQkS2Rw3Xm1HZhBJjDz4Z4hrSytnpjpmEtkzZ8IyxQAksxjSpG7PgD74lCRZm\nCE7ecFpHfOa5WXKsQeTp4qVLdx+S5dIGvutEeikNMh+LQxnTDv3XvtqpUQKBgBct\n5bYTXKnl82ZaRXE1VbaGDWOjKPPIBzlOX+6p6yaBo+Xl0AlDRGVSNmcG/wQfxxlo\nvRHLFjIo+PCSFcjLcl0Kv2aaGx2S10KApwIQjwYA9h/qrW52uMU+btYJ7+iXM4Wp\nLHvUw6RxleUy/eZI+qoOYc6A2cUP84rBojOMR7fxAoGAXrBvNjymjyftuCAJKvkd\ncZJJDqqIGYvFyFSpQ9zHBblR+03euQUwsm8vDTAvQh9+Rb+rNZ6NRpDzwOqjldEj\n/NuMaQLcTUc2n5HVH+90owwpWxDF8uHoxwdlEggNrOTkpCgB9iCHufqHvr49dJj1\n4Ll7ISAmj9R1R79OEPTfSME=\n-----END PRIVATE KEY-----\n", "client_email": "sunroombot@sunroombotapi.iam.gserviceaccount.com", "client_id": "106195641281926274585", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sunroombot%40sunroombotapi.iam.gserviceaccount.com", "universe_domain": "googleapis.com"}
```

✅ Do NOT upload your key file to GitHub — Render will inject it securely.