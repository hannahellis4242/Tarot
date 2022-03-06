FROM node:alpine
WORKDIR /web
COPY package.json .
RUN npm i
COPY index.d.ts index.d.ts
COPY tsconfig.json tsconfig.json
COPY public public
COPY src src
CMD npm start