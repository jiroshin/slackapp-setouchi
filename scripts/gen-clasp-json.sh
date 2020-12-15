#!/bin/sh

if [ -z $GAS_ID ]; then
  echo 'Please set environment "$GAS_ID"' >&2
  exit -1
fi

cat <<EOF > .clasp.json
{
  "scriptId": "$GAS_ID",
  "rootDir": "./src",
  "fileExtension": "ts"
}
EOF
