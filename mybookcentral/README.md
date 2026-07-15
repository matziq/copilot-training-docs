# MyBookCentral Website Mirror

This repository now contains a simple crawler script **and** a FastAPI backend that serves the mirrored site while powering the Contact form.

## Prerequisites

- Python 3.11+
- Dependencies from `requirements.txt`

```pwsh
C:/Users/johnny/AppData/Local/Microsoft/WindowsApps/python3.11.exe -m pip install -r requirements.txt
```

## Running the contact form backend

1. Create a `.env` file (or export environment variables another way) with at least:

   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USERNAME=apikey-or-username
   SMTP_PASSWORD=secret
   CONTACT_RECIPIENT=fdml@pmt.org
   SMTP_SENDER="Book Central <noreply@example.com>"
   SMTP_STARTTLS=true   # optional, defaults to true
   SMTP_USE_SSL=false   # optional, defaults to false
   ```

2. Run the FastAPI server (serves `/` with the static site and `/api/contact` for submissions):

   ```pwsh
   cd d:/aaaScripts/mybookcentral
   uvicorn contact_api:app --host 0.0.0.0 --port 8000 --reload
   ```

3. Visit `http://localhost:8000/contact/#visit` and submit the form. The UI posts JSON to `/api/contact`, the API validates fields, and an email is sent via the SMTP settings above. Success/error states surface inline on the button/status message.

## Mirroring the upstream site again

Use `mirror_site.py` if the remote content changes:

```pwsh
C:/Users/johnny/AppData/Local/Microsoft/WindowsApps/python3.11.exe mirror_site.py http://100.86.242.63:8000/ --output site_mirror
```

Flags: `--max-items` to cap crawl size (default 5000) and `--timeout` for HTTP timeout seconds.

## Tests

```pwsh
cd d:/aaaScripts/mybookcentral
python -m pytest
```

## Static preview without the API

If you just need to browse the static files without the contact endpoint, you can still run a lightweight server:

```pwsh
cd d:/aaaScripts/mybookcentral/site_mirror
python -m http.server 8000
```

The FastAPI server is recommended because it keeps the form fully functional.
