FROM node:alpine
COPY . /home/feda
WORKDIR /home/feda
RUN addgroup ubuntu && \
    adduser ubuntu && \
    npm install --production
USER ubuntu
EXPOSE 3000
VOLUME [ "/home/feda/.workspace", "/home/feda/ssl" ]
CMD npm start
