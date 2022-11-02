FROM node:16.16.0-slim

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

CMD npm start