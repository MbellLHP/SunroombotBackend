# SunroomBot Backend (Final Secure Version)

This is a secure Node.js + Express backend that connects to the Google Sheets API using service account credentials passed through an environment variable.

## ✅ Best Practice

You will NOT upload any `.json` key file. Instead, paste your entire service account JSON as a **secret environment variable** inside Render.

## 🚀 Deploying on Render

1. Push this folder to GitHub
2. Go to [https://render.com](https://render.com) > New Web Service
3. Connect your GitHub repo
4. Use:
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
5. Add an environment variable:
   - **Key:** `GOOGLE_SERVICE_KEY`
   - **Value:** (Paste your service account JSON as one line — see below)

⚠️ Do NOT include your actual credentials in the repo or README.

## 🔑 Paste this in Render's Environment Tab

```
{"type": "service_account", "project_id": "sunroombotapi", "private_key_id": "1cb6150abf15b945d90556b99006e9ec93d6a931", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDbtcQgcMkgD4HY\nY0JAldsrXkUSIPT6uGoWfZoOVcJj+xzfP1v63537IxoaigEZykBQtpZ9/yGXLC/s\n3KG6f7oDG4/FJqiIT7l2azoPblwJbFAlR3gCUbwBXpfKSyyTXCaThcYPG1htJ9TD\nGKAFp6cj1FeeKV98G5zzpM+y0/k/QGPxnpdHH/wnu9nZrlxJm4CNL+KSjgomCSSK\nfIdLGyD/TJHnUlawsyJl/TD6IZ/gmbqc6YAZ7gk+oJdmVQRBd7324Ju5cwqlEZQ0\ndYcWafqikv6On3gfvXLeXMiWeGpEl9sYDbt+deGkUJ8ORvYqN5NBSiPrxmPcXSwd\nR8xPID+VAgMBAAECggEAUBhh8N+c+qKcl9mLmAbpeNRrgrHgDRy4lA1i4ZHzBUbQ\nnjQ3YGwv6BNCW2VvBEteie4eS718LeOubv95uAcDNUnRbjJrIxJJTrnFV0XIqKjD\nSOvWfKX2T1uAI3+nNutTptkQPIagBF8Oabcq8xTM0juBW4fCpvhcDdhJ3Wv4Q82U\nqY2+lveZryTMmOOYprOShiOgTxFxCihzWOUwBCYrx2KF5kjs47/bj6PueVb5GduK\nZkRyxHYOIogixrfB4AIlgoFueQ/qZi0kPCj8PO+xpGgGf/K0CmXKd1+SRCCSwIfZ\nCixyFH02vWDzg9zEpOI3xeBMNqQoFZ6FCyPYCm5BSwKBgQD+bugLKSFLgtkmBlbC\nyiVV3iSSjpxPIr/qdPG0wINxX3W+fcSz6o21F8gxBQnzS/och7PbJMc4taHXKpL6\nGNPPsswMvGh3wrTy7D4j7N8oq0WTFpgKG5CF1fVIRvdQ6JiuTq1Es8gh9ZcbVEbA\np4W/0Ebwp+BBRTJFLxbH5WAHVwKBgQDdEB8Q+hTHEBXEn/SwIWAMX7J8IJ7dNCRF\nOsFmmWCbFTmszW+e9oGVlAg4XTpSc8Za8E2Qwreui776BYXpLh7zYBs2fhAoIO1K\nT0fWDO2lEDPZZTuINrLzsiRVAjkqGyBenfQ4/5Y16Bt9QbMDD+p23gWa1o7br4ha\nJfWfF+v48wKBgA7Skz4jNUda5h+q+t76O9aWzHalTEHn+lpEWdh35rByKT/hv9Xj\nckH8krMYYg4EfRuwZC/+IoURP85zMoDTdXOCLRUI3OUtOLF2ReB96jpKUBFTnaPp\nGzBQ2KtPRxU1l79/4eRAvQYNcrIq5LxQhiA4mAlpHk1vJJCXP7KBkGidAoGBAILr\nkkp+oSGHcCzjwokxKu4JGu6SbyN4RubNNk7qFSGjf2XMwQd23CXW5stiwzCjqlyf\nJoDOIPR5hOATt0vy6ZefWl56aF0rqvywWU32mCOCpgJhBtHT+0WCQiwqReqe6BvB\nFitPiwlf7i/PYhI1Mdm2AcHCwhZvLaSeCIpxI2prAoGBAMuUs7OOx2NmPw3dSEZZ\nH7vMfttfWNaoTc+6uaexqZTMEuvaHcTKq7ZrPJW94Iao2ASiGNsw3vpmFdX/9UXD\nuyJgAdrm7smLo6N0b6GSUv0BnVZlQIt3z6pdtURbpMjTpmStp5fwQLXmndmRYvpN\nvAnYa2e8eQppZY9CYRjr59CQ\n-----END PRIVATE KEY-----\n", "client_email": "sunroombot@sunroombotapi.iam.gserviceaccount.com", "client_id": "106195641281926274585", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sunroombot%40sunroombotapi.iam.gserviceaccount.com", "universe_domain": "googleapis.com"}
```

This string is safe when stored in Render's environment settings — never in code or public files.