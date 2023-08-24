#!/usr/bin/env bash

set -euo pipefail

env=$1

echo "--- 🚀 Installing npm dependencies..."
yarn install --frozen-lockfile

echo "--- 🚀 Run next build..."
yarn storybook:build

cd deployment

echo "--- 🚀 Zipping build..."
zip -r storybook-build.zip build
