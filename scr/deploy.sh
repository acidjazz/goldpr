#!/bin/bash

s3cmd --config=/Users/k/.s3designsake sync pub/. s3://goldpr.com --exclude '.DS_Store'
s3cmd setacl --config=/Users/k/.s3designsake s3://goldpr.com/ --acl-public --recursive
