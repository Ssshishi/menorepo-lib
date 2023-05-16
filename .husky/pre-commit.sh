#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm test && npx --no pretty-quick --staged