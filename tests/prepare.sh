#!/bin/bash

TOOLS_DIR="./tools"
CHROME_BINARY="$TOOLS_DIR/chrome-headless-shell-linux64"
CHROMEDRIVER_BINARY="$TOOLS_DIR/chromedriver-linux64"
CHROME_VERSION=131.0.6778.87
CHROME_HEADLESS_URL="https://storage.googleapis.com/chrome-for-testing-public/${CHROME_VERSION}/linux64/chrome-headless-shell-linux64.zip"
CHROMEDRIVER_URL="https://storage.googleapis.com/chrome-for-testing-public/${CHROME_VERSION}/linux64/chromedriver-linux64.zip"

sudo apt install -y unzip

# Install google chrome binaries
mkdir -p $TOOLS_DIR

if ! [[ -f "$CHROME_BINARY/chrome-headless-shell" ]]; then
    echo "Chrome binary not found. Downloading version ${CHROME_VERSION}..."
    wget -q $CHROME_HEADLESS_URL -O "$CHROME_BINARY.zip"
    unzip -q "$CHROME_BINARY.zip" -d $TOOLS_DIR
    chmod +x "$CHROME_BINARY"
    rm -f "${CHROME_BINARY}.zip"
fi

if ! [[ -f "$CHROMEDRIVER_BINARY/chromedriver" ]]; then
    echo "Chrome webdriver not found. Downloading version ${CHROME_VERSION}..."
    wget -q $CHROMEDRIVER_URL -O "$CHROMEDRIVER_BINARY.zip"
    unzip -q "$CHROMEDRIVER_BINARY.zip" -d $TOOLS_DIR
    chmod +x "$CHROMEDRIVER_BINARY"
    rm -f "${CHROMEDRIVER_BINARY}.zip"
fi

sudo apt install -y libnss3 libxss1 libappindicator3-1 libatk-bridge2.0-0t64 libx11-xcb1 libasound2t64

# Install python env
sudo apt-get install python3.12-venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt