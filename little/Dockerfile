FROM node:alpine
COPY src src
COPY package.json .
COPY public public
RUN npm i
RUN npx tsc
CMD node dist/main.js