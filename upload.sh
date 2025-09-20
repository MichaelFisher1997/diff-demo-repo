#!/usr/bin/env bash
API_KEY="abcdefghijklmnopqrstuvwxyzABCDEF"
FOLDER_PATH="demo-site/master/abc123"
BASE_URL="http://localhost:8080/api/v1"
siteId="68c6aed63fea226012a87d9a"  # Replace with your actual site ID from the GoDiffy dashboard

# Upload from a screenshots directory
for file in screenshots/*.png; do
  filename=$(basename "$file")
  echo "Uploading $filename..."
  curl -X POST "$BASE_URL/uploads" \
    -H "Authorization: $API_KEY" \
    -F "image=@$file" \
    -F "siteId=$siteId" \
    -F "branch=master" \
    -F "commit=abc123" \
    -F "path=$FOLDER_PATH/$filename"
done
