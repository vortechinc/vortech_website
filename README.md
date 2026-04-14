## Tech Stack

- **Next.js** 15 (App Router)
- **React** 19
- **Tailwind CSS** 4
- **Keystone CMS** (Internal CMS)
- **TypeScript**

## System Requirements

### Development

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x
- **Git** ≥ 2.x

> Recommended: use nvm to manage Node versions.

## Environment Variables

Create a .env file in the project root:

```
\# Keystone CMS

NEXT_PUBLIC_KEYSTONE_URL=https://your-keystone-domain.com

KEYSTONE_WEBHOOK_SECRET=your_webhook_secret_key

\# Application

NEXT_PUBLIC_EMAIL_ADDRESS=info@vortechinc.io

NEXT_PUBLIC_JOB_PAGE_SIZE=10
```

> Never commit .env to Git.

## Production Build

### 1. Build Locally

bash

# Install dependencies

```
npm install
```

# Build for production

```
npm run build
```

# Test production build locally

```
npm run start
```

## Deploy to VPS

# SSH into VPS

```
ssh root@your-vps-ip
```

# SSH into server

```
ssh root@31.97.66.98
```

# Go to project directory

```
cd projects
```

# Remove old project

```
rm -rf project-name
```

# Unzip Project

```
unzip ten_file.zip
cd ten_file
```

# Build application

```
npm run build
```

# Restart PM2 process

```
pm2 restart 0

```
