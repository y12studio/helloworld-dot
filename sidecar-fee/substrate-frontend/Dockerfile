FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]