FROM node:12-alpine

WORKDIR /server

COPY package*.json /server/

RUN npm ci

COPY . /server/

CMD npm start