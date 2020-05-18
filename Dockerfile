FROM node:12-stretch as base

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY . . 

# Build client
RUN cd client && npm install
RUN cd client && npm rebuild node-sass
RUN cd client && npm run build-prod

# Build server
RUN cd server && npm install
RUN cd server && npm run tsc


# Second step
FROM node:alpine

RUN apk add --update nodejs nodejs-npm

RUN mkdir /home/node/app
WORKDIR /home/node/app

RUN mkdir client
RUN mkdir server

COPY --from=base /home/node/app/client/package*.json ./client/
COPY --from=base /home/node/app/server/package*.json ./server/
COPY --from=base /home/node/app/client/dist ./client/dist
COPY --from=base /home/node/app/server/dist ./server/dist

RUN cd client && npm install --production
RUN cd server && npm install --production

EXPOSE 8080

USER node

CMD ["node", "server/dist/index.js"]


