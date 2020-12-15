#!/bin/sh

echo "GAS is going to deploy..."

./scripts/gen-clasp-json.sh
clasp push
