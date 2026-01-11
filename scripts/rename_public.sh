#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/rename_public.sh [public_folder]
# Defaults to ./public when no argument is provided.

dir="${1:-public}"

if [ ! -d "$dir" ]; then
  echo "Directory '$dir' not found."
  exit 1
fi

count=0
shopt -s nullglob

# Phase 1: move to temporary names (preserve extensions) to avoid name collisions
for f in "$dir"/*; do
  [ -f "$f" ] || continue
  ext="${f##*.}"
  mv -- "$f" "$dir/.tmp_rename_${count}.${ext}"
  count=$((count+1))
done

if [ $count -eq 0 ]; then
  echo "No files found in '$dir'."
  exit 0
fi

# Phase 2: rename temp files to final sequential names
i=0
for tmp in "$dir"/.tmp_rename_*; do
  [ -e "$tmp" ] || continue
  ext="${tmp##*.}"
  mv -- "$tmp" "$dir/image${i}.${ext}"
  i=$((i+1))
done

echo "Renamed $i files in '$dir'."
