FROM node:18

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

# RUN npm run build

RUN npx prisma generate

ENV PORT = 8000

EXPOSE 8000

CMD ["npm", "run", "dev"]
