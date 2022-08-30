FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN yarn && yarn build

FROM nginx
COPY --from=0 /app/dist /usr/share/nginx/html
COPY --from=0 /app/nginx.conf /etc/nginx/conf.d/default.conf
