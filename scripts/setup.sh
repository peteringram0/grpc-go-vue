#!/usr/bin/env bash

echo "=== Installing FE Deps ==="
cd client
yarn install
cd ..

echo "=== Generating Proto Files ==="
bash ./scripts/proto-gen.sh

echo "=== Creating Docker Image ==="
bash ./scripts/docker-create.sh