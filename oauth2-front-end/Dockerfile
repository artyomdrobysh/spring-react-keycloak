FROM node:21-alpine3.18 as build
WORKDIR /opt/app
ARG SOURCE_DIR=.
COPY ${SOURCE_DIR}/package.json .
COPY ${SOURCE_DIR}/package-lock.json .
RUN npm install
COPY ${SOURCE_DIR}/tsconfig.json .
COPY ${SOURCE_DIR}/webpack.config.js .
COPY ${SOURCE_DIR}/src ./src
COPY ${SOURCE_DIR}/public ./public
ARG ENV_FILE
COPY ${ENV_FILE} ./.env
RUN npm run build

FROM nginx:1.25.4-alpine
COPY --from=build /opt/app/build /usr/share/nginx/html
EXPOSE 81
ENTRYPOINT ["nginx", "-g", "daemon off;"]
