FROM node:19.0.0-buster-slim

RUN mkdir -p /app/spectrum/server-driven-form

WORKDIR /app/spectrum/server-driven-form

COPY ./package.json .

RUN npm install

COPY ./tsconfig.json .

COPY .babelrc .

COPY ./webpack/ ./webpack/

COPY tokens.json .

COPY genTokens.mjs .

COPY ./src/ ./src/

COPY ./html/ ./html/

COPY ./assets/ ./assets/

RUN npm run build

RUN rm -rf \
    node_modules \
    src \
    tsconfig.json \
    webpack.server.js \ 
    client.webpack.js

RUN npm install --only=production

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]