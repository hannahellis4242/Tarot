FROM node:alpine
WORKDIR /word
COPY package.json .
RUN npm i
COPY uniqueFilteredWordList.txt words.txt
COPY tsconfig.json tsconfig.json
COPY src src
RUN npx tsc
CMD node dist/main.js