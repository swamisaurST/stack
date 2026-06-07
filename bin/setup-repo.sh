#!/usr/bin/env bash
# Personalize STACK's repo links and (optionally) make the first commit.
# Usage: bin/setup-repo.sh <owner>/<repo>
set -euo pipefail

slug="${1:-}"
if [ -z "$slug" ] || [[ "$slug" != */* ]]; then
  echo "usage: bin/setup-repo.sh <owner>/<repo>   (e.g. bin/setup-repo.sh acme/stack)"
  exit 1
fi
owner="${slug%%/*}"
repo="${slug##*/}"

# Cross-platform in-place replace (mac + linux) via perl.
grep -rl '__OWNER__\|__REPO__' --include='*.md' . 2>/dev/null | while read -r f; do
  perl -pi -e "s/__OWNER__/$owner/g; s/__REPO__/$repo/g" "$f"
done

echo "Linked to https://github.com/$slug"
echo "Component library will publish at https://$owner.github.io/$repo/"
echo
echo "Next:"
echo "  git add -A && git commit -m 'Personalize STACK for $slug'"
echo "  git remote add origin git@github.com:$slug.git"
echo "  git push -u origin main"
echo "  # then: GitHub > Settings > Pages > Source: GitHub Actions"
