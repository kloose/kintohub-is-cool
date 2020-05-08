FROM nginx:1.17.9-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY dist/mpl/ /usr/share/nginx/html/
#COPY src/assets/*.* /usr/share/nginx/html/

COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx/start-nginx.sh /start-nginx.sh

RUN chmod +x /start-nginx.sh

EXPOSE 80
CMD ["/start-nginx.sh"]
