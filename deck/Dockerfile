FROM node:alpine
COPY src src
COPY package.json .
RUN npm i
RUN npx tsc
CMD node dist/main.js