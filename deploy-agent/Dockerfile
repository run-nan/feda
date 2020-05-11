FROM node:alpine
COPY . /home/feda
WORKDIR /home/feda
RUN npm install --production
EXPOSE 3000
VOLUME ["/home/feda/.workspace", "/home/feda/ssl"]
CMD ["npm", "start"]