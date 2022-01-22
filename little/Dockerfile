FROM node:alpine
COPY tsconfig.json tsconfig.json
COPY package.json .
RUN npm i
COPY src src
RUN npx tsc
COPY public public
CMD node dist/main.js