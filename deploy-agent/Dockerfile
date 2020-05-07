FROM node:alpine
COPY . /home/app
WORKDIR /home/app
RUN npm install --production
EXPOSE 3000
VOLUME [ "/home/app/feda-assets", "/home/app/log", "/home/app/.temp" ]
CMD npm start
