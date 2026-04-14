#!/bin/bash
set -e

echo "Deploying to Production Vortech Site..."

if [ -z "$NEXT_PUBLIC_KEYSTONE_URL" ]; then
  echo "Error: NEXT_PUBLIC_KEYSTONE_URL is not set"
  exit 1
fi

mkdir -p ~/.ssh
ssh-keyscan -H "$VPS_URL" >> ~/.ssh/known_hosts
ssh root@"$VPS_URL" "export NEXT_PUBLIC_KEYSTONE_URL='$NEXT_PUBLIC_KEYSTONE_URL'; bash $VPS_DEPLOY_SCRIPT_PATH"