# Vortech CMS – SQLite Database Backup Guide

This document describes how to safely back up the **Keystone CMS SQLite database** on the server and download it to a local machine.

## Overview

- CMS: Keystone 6
- Database: SQLite
- Backup method: `sqlite3 .backup` (safe for running databases)
- Backup format: `.sqlite.gz`

**Create Backup on Server**

SSH into the server:

```
 ssh root@your-vps-ip
```

**Go to project director**

```
 cd projects
 cd p002-vortech-cms-keystone
```

Run the backup command:

```
sqlite3 keystone.db ".backup 'backups/keystone_$(date +%Y%m%d_%H%M%S).sqlite'"

```

**Download Backup to Local Machine**

Run the following commands on your **local machine**, not on the server.

**Using scp (recommended)**

To find path in server:

```
realpath backups/file_name.gz
```

**Open terminal in local**

```
scp root@your-vps-ip:/var/backups/keystone-db/keystone_backup.sqlite.gz ~/Downloads/
```
