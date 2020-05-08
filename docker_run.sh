#docker run --rm --name acc-ui \
#-e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password \
#-d -p 8123:80 \
#-v /octus/postgres/data:/var/lib/postgresql/data  \
#acc-ui

docker run --rm \
  --name acc-ui \
  -e MPL_ADMIN_UI_VERSION=0.1.0 \
  -e MPL_GW_API="http:\/\/192.168.1.16:8080" \
  -p 8123:80 \
  -p 8124:443 \
  asia.gcr.io/acclime-test/acc-ui:0.1.0
