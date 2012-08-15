#!/bin/bash

# Constants

# Absolute path to the firefox addon-sdk
ADDON_SDK=~/Downloads/addon-sdk-1.6.1/bin

# TODO: Ability to start from a clean python.opt.js
# The optimized cpython javascript file with canaries in the right places
PYTHON_OPT_JS='../lib/python.opt.js'
# The python side of empydom
PY_EMPYDOM='../lib/empydom.py'
# The JS side of empydom
JS_EMPYDOM='../lib/empydom.js'
# Python modules that are loaded at init time
PYTHON_MODULES='../lib/modules.js'
# Any extra python modules that could possibly be imported
FS_CREATE_LAZY_EXTRA='../lib/fs_create_lazy_extra.js'
# The partial function to load internally included modules
FS_FORCE_LOAD_FILE='../lib/fs_force_load_file.js'

CANARY='&&&^^^&&&'

# Put the files that need to be parsed first, first
FILES_TO_PARSE=( $PYTHON_OPT_JS '../chrome-extension/empydom.user.js' '../firefox-extension/data/python.js' )
# These are the names of the variables that need to be updated when the file is updated
SPECIAL_VARS=( "PYTHON_OPT_JS" )
# Names of variables that point to files that need to be smashed
# NOTE: Make sure these files have a newline at the end of them
SMASH_VARS=( "PY_EMPYDOM" )

# Functions

load_dir() {
  SOURCE="${BASH_SOURCE[0]}"
  DIR="$( dirname "$SOURCE" )"
  while [ -h "$SOURCE" ]
  do 
    SOURCE="$(readlink "$SOURCE")"
    [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
    DIR="$( cd -P "$( dirname "$SOURCE"  )" && pwd )"
  done
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
}

# Script

load_dir
mkdir -p "$DIR/../out/tmp"

for path in "${FILES_TO_PARSE[@]}"; do
  FILENAME=`basename $path`
  OUT_FILE="$DIR/../out/$FILENAME"
  >"$OUT_FILE"
  while read line; do
    if [[ $line == '&&&^^^&&&'* ]]; then
      # if it's a canary put the contents
      WHICH_REPLACEMENT=${line:9}

      # if a special variable is one we're replacing
      # prepae to inject the ALREADY outputted file instead of the original
      DONE=""
      for special_var in "${SPECIAL_VARS[@]}"; do
        if [[ $special_var == $WHICH_REPLACEMENT ]]; then
          eval "DEREF_FILE=\$$WHICH_REPLACEMENT"
          INJECTION_FILE=$DIR/../out/`basename $DEREF_FILE`
          DONE="yes"
        fi
      done

      # if we didn't prepare to inject a file, set it to the normal input
      if [[ -z $DONE ]]; then
        eval "INJECTION_FILE=$DIR/\$$WHICH_REPLACEMENT"
      fi
      
      # if the file needs to be smashed first, then smash it
      for smash_var in "${SMASH_VARS[@]}"; do
        if [[ $smash_var == $WHICH_REPLACEMENT ]]; then
          $DIR/smash.sh $INJECTION_FILE > $DIR/../out/tmp/$smash_var.smash
          INJECTION_FILE=$DIR/../out/tmp/$smash_var.smash
        fi
      done
      
      # inject the whole file
      echo "$(cat $INJECTION_FILE)" >> "$OUT_FILE"
    else
      # Just echo the line back out
      echo "$line" >> "$OUT_FILE"
    fi
  done < "$DIR/$path"
  echo -n "."
done
echo ""

# cleanup
rm -rf "$DIR/../out/tmp"

# Organize out/
# TODO: Make this less manual
pushd $DIR/../out > /dev/null

# Chrome
mkdir -p chrome
mv empydom.user.js chrome/
echo "Built chrome user script"

# Firefox
mkdir -p firefox/data/
cp -r $DIR/../firefox-extension/* firefox/
mv python.js firefox/data/
pushd firefox > /dev/null
$ADDON_SDK/cfx xpi
popd > /dev/null

rm python.opt.js

popd > /dev/null
