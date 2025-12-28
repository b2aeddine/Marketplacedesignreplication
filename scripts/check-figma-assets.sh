#!/bin/bash

# Anti-regression check: Fail if any figma:asset imports exist in the codebase
# This ensures we don't accidentally reintroduce Figma Make's special asset syntax

echo "Checking for figma:asset imports..."

MATCHES=$(grep -r "figma:asset" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" src/ 2>/dev/null)

if [ -n "$MATCHES" ]; then
  echo "ERROR: Found figma:asset imports that need to be replaced with local assets:"
  echo "$MATCHES"
  echo ""
  echo "Replace 'figma:asset/<hash>.png' with '@/assets/<hash>.png'"
  exit 1
else
  echo "OK: No figma:asset imports found."
  exit 0
fi
