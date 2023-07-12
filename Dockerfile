FROM node:19.0.0-buster-slim

RUN mkdir -p /app/spectrum/server-driven-form

WORKDIR /app/spectrum/server-driven-form

COPY ./package.json .

RUN npm install

COPY ./tsconfig.json .

COPY ./server.webpack.js .

COPY tokens.json .

COPY genTokens.mjs .

COPY ./src/ ./src/

COPY ./.env ./.env

RUN npm run build

RUN rm -rf \
    node_modules \
    src \
    tsconfig.json \
    webpack.server.js

RUN npm install --only=production

ENV PORT=3000

EXPOSE 8080

CMD ["npm", "run", "start"]