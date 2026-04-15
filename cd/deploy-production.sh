#!/bin/bash
set -e

echo "Deploying to Production Vortech Site..."
mkdir -p ~/.ssh
ssh-keyscan -H "$VPS_URL" >> ~/.ssh/known_hosts
ssh root@"$VPS_URL" "bash $VPS_DEPLOY_SCRIPT_PATH"