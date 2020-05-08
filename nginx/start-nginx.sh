#!/bin/sh

const gateway = '';
const realm = '';
const instanceId = '';

echo "Setting NPE_GW_API=${NPE_GW_API}"
echo "Setting NPE_IDP_REALM=${NPE_IDP_REALM}"
echo "Setting INSTANCE_ID=${INSTANCE_ID}"

sed -i "s/NPE_GW_API/${NPE_GW_API}/g" /usr/share/nginx/html/*.js
sed -i "s/INSTANCE_ID/${INSTANCE_ID}/g" /usr/share/nginx/html/*.js
sed -i "s/NPE_IDP_REALM/${NPE_IDP_REALM}/g" /usr/share/nginx/html/*.js

echo "Starting NPE-ui NGINX, varooom"
nginx -g 'daemon off;'
