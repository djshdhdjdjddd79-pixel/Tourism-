import urllib.request
import re
import json

url = "https://share.google/hij2CYhWXLoDCGk5c"
req = urllib.request.Request(
    url,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
)

opener = urllib.request.build_opener(urllib.request.HTTPRedirectHandler)
resp = opener.open(req)
final_url = resp.geturl()
html = resp.read().decode("utf-8", errors="ignore")

print("Final URL:", final_url)
# print title and meta tags
for tag in re.findall(r'<meta[^>]+>', html, re.IGNORECASE):
    print("META:", tag)

# search for image URLs in HTML
for match in re.findall(r'https?://[^"\'\s<>\\]+', html):
    if any(term in match.lower() for term in ['googleusercontent', 'photos', 'drive', 'instagram', 'image', 'jpg', 'png', 'jpeg', 'webp']):
        print("IMG_URL:", match)
