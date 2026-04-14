#!/bin/bash
set -e

echo "Deploying to Staging Vortech Site..."

if [ -z "$NEXT_PUBLIC_KEYSTONE_URL" ]; then
  echo "Error: NEXT_PUBLIC_KEYSTONE_URL is not set"
  exit 1
fi

export NEXT_PUBLIC_KEYSTONE_URL

npm install
npm run build
npm install -g netlify-cli

netlify deploy --build --prod \
  --site=$NETLIFY_STAGING_SITE_ID \
  --auth=$NETLIFY_STAGING_AUTH_TOKEN
