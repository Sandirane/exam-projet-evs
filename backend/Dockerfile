FROM node:18

WORKDIR /app

COPY server.js ./

RUN npm init -y && \
    npm install express cors body-parser

EXPOSE 3000

CMD ["node", "server.js"]
