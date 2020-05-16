FROM node:12-alpine

WORKDIR /server

COPY package*.json /server/

RUN apk update && apk add bash

RUN npm ci

COPY . /server/

CMD npm start