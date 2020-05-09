FROM node:10-alpine as builder
COPY package.json package-lock.json ./
RUN npm ci && mkdir -p /kinto/app && mv ./node_modules ./kinto/app
WORKDIR /kinto/app
COPY . .
RUN npm run build:prod

FROM nginx:1.14.1-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

# FROM nginx:1.17.9-alpine

# RUN rm -rf /usr/share/nginx/html/*

# COPY dist/mpl/ /usr/share/nginx/html/
# #COPY src/assets/*.* /usr/share/nginx/html/

# COPY nginx/default.conf /etc/nginx/conf.d/
# COPY nginx/start-nginx.sh /start-nginx.sh

# RUN chmod +x /start-nginx.sh

# EXPOSE 80
# CMD ["/start-nginx.sh"]

