FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

RUN rm -rf ./src

EXPOSE 2032

ENV PORT=2032

CMD ["sh", "-c", "npx next start -p $PORT"]