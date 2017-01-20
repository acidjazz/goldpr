#!/bin/bash

s3cmd --config=/Users/k/.s3/.s3designsake sync public/ s3://goldpr.com --exclude '.DS_Store'
s3cmd setacl --config=/Users/k/.s3/.s3designsake s3://goldpr.com/ --acl-public --recursive
