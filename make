#!/bin/bash

if [ -z "$1" ]; then
    echo './make <default|minify|test>'
    exit
fi

if [ $1 == 'default' ]; then
    npm run dist:default
elif [ $1 == 'minify' ]; then
    npm run dist:minify
elif [ $1 == 'test' ]; then
	npm run test
	npm run dist:default
    npm run dist:minify
else
    echo './make <default|minify|test>'
    exit
fi