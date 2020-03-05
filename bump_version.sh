#!/bin/bash

VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo $VERSION

cd projects/ngx-group-validator || return

npm version $VERSION --git-tag-version false

git add .
