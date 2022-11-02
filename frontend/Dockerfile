FROM node:16.16.0-slim as build

ARG REACT_APP_BACKEND_PORT
ENV REACT_APP_BACKEND_PORT=$REACT_APP_BACKEND_PORT

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /frontend/build /usr/share/nginx/html

COPY --from=build /frontend/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


