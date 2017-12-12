FROM node:8.9.3-alpine
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY package.json yarn.lock ./

RUN yarn install

COPY backend ./backend
COPY env ./env
COPY frontend ./frontend

CMD ["node", "."]
