FROM node:16.10.0-alpine

EXPOSE 8080

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build
CMD [ "npm", "run", "start:prod" ]