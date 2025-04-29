#!/usr/bin/env bash
set -euo pipefail

### CONFIGURATION:
REPO_SSH="https://github.com/mattboostkit/BeyondTheFace.git"

TARGET_BRANCH="main"
BUILD_DIR="."

### 1. Clone the repo into a temp dir
TMPDIR=$(mktemp -d)
git clone "$REPO_SSH" "$TMPDIR"
cd "$TMPDIR"

### 2. Switch to the target branch
git checkout "$TARGET_BRANCH"

### 3. Remove all old files (but keep .git)
find . -maxdepth 1 ! -name .git ! -name . -exec rm -rf {} +

### 4. Copy your new site in
cp -R "$OLDPWD/$BUILD_DIR"/. .

### 5. Commit & force-push
git add --all
git commit -m "��� Deploy new site – $(date +'%Y-%m-%d %H:%M')"
git push --force origin "$TARGET_BRANCH"

echo "✅ Site deployed to ${REPO_SSH} (branch ${TARGET_BRANCH})"
