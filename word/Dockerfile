FROM node:alpine
COPY uniqueFilteredWorldList.txt words.txt
COPY tsconfig.json tsconfig.json
COPY package.json .
RUN npm i
COPY src src
RUN npx tsc
CMD node dist/main.js