FROM node:alpine
WORKDIR /web
COPY package.json .
RUN npm i
COPY tsconfig.json tsconfig.json
COPY 

COPY src src
RUN npx tsc
COPY public public
COPY views views
CMD node dist/main.js