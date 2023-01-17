FROM node:18.12

WORKDIR /app/exercises

COPY ./package*.json .
COPY ./webpack.config.js .
RUN npm install

EXPOSE 3500

CMD ["npm", "start"]
