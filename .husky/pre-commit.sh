#!/bin/sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm test && pnpm lint && npx --no pretty-quick --staged