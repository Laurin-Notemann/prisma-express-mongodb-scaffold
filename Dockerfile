FROM node:18

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

ENV PORT = 8000

EXPOSE 8000
