#BUILD
FROM node:latest as builder
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run ng build

#NGINX
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/client .
COPY ./etc/nginx/conf.d ./etc/nginx/conf.d/default.conf
EXPOSE 80

