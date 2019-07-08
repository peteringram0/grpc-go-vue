#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="./client/node_modules/.bin/protoc-gen-ts"
CLIENT_OUT_DIR="./client/proto"
SERVER_OUT_DIR="./proto"

mkdir "$CLIENT_OUT_DIR"

protoc \
    --proto_path ./proto/ "${SERVER_OUT_DIR}/echo.proto" \
    --go_out=plugins=grpc:proto \
    --js_out="import_style=commonjs,binary:${CLIENT_OUT_DIR}" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="service=true:${CLIENT_OUT_DIR}"

mv "$SERVER_OUT_DIR/echo.pb.go" ./server/proto/echo.pb.go