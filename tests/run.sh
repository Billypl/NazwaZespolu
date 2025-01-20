#!/bin/bash

PARAM_FLAG=false

# Parse arguments
while getopts "p" opt; do
  case $opt in
    p)
      PARAM_FLAG=true
      ;;
    *)
      echo "Usage: $0 [-p]"
      exit 1
      ;;
  esac
done

source venv/bin/activate
if $PARAM_FLAG; then
  python3 selenium_tests.py -p
else
  python3 selenium_tests.py
fi
