FROM node:alpine
WORKDIR /web
COPY package.json .
RUN npm i
COPY tsconfig.json tsconfig.json
COPY src src
RUN npx tsc
COPY public public
CMD node dist/main.js