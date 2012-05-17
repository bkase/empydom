#!/bin/bash

if [[ $# -ne 1 ]]
then
    echo "Give the python file to smash"
    exit 1
fi
 
# TODO: make this regex NOT put a \n if last character is a \
cat $1 | sed 's/\\/\\\\/g' | sed 's/'"'"'/\\'"'"'/g' | sed 's/\(.*\)/'\''\1\\n'\'' + /g'
