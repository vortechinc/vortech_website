#!/bin/bash
set -e

echo "Deploying to Production Vortech Site..."

npm install
npm run build
npm install -g netlify-cli

netlify deploy --build --prod \
  --site=$NETLIFY_STAGING_SITE_ID \
  --auth=$NETLIFY_STAGING_AUTH_TOKEN
