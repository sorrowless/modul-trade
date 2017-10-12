#!/bin/bash
set -e  # Exit with non-zero if anything fails

BUILD_BRANCH="master"

# Do not build a new version if it is a pull-request or commit not to BUILD_BRANCH
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$BUILD_BRANCH" ]; then
    echo "Not $BUILD_BRANCH, skipping deploy;"
    exit 0
fi

echo "Prepare the key..."
# Encryption key is a key stored in travis itself
OUT_KEY="id_rsa"
echo "Trying to decrypt encoded key..."
openssl aes-256-cbc -k "$ENCRYPTION_KEY" -in deploy/id_rsa.enc -out $OUT_KEY -d -md sha256
chmod 600 $OUT_KEY
echo "Add decoded key to the ssh agent keystore"
eval `ssh-agent -s`
ssh-add $OUT_KEY

rsync -avi --exclude "$OUT_KEY" ./ travis@52.178.66.16:/tmp/modul_trade/
