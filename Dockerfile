
# use node:alpine for final version
FROM node:12-stretch

# change user
USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

# Copy all the things
COPY --chown=node:node . . 

# Build react + ts frontend bundle
RUN cd client && npm ci 
RUN cd client && npm run build-prod

# Build server
RUN cd server && npm ci
RUN cd server && tsc

# need to change localhost to 0.0.0.0?
EXPOSE 8080

# cd into server first...?
CMD ["node" "server/dist/index.js"]