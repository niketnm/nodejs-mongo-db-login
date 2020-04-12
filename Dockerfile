FROM node
WORKDIR /app
RUN npm install
EXPOSE 3000
COPY . /app
CMD node app.js
