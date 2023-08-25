#!/usr/bin/env bash

set -euo pipefail

echo "--- 🚀 Installing npm dependencies..."
yarn install --frozen-lockfile

echo "--- 🚀 Running tests..."
yarn test

echo "--- 🚀 Linting..."
yarn lint
