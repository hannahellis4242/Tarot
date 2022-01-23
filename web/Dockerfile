FROM node:alpine
COPY tsconfig.json tsconfig.json
COPY package.json .
RUN npm i
COPY src src
RUN npx tsc
COPY public public
COPY views views
CMD node dist/main.js