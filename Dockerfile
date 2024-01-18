FROM node:alpine 
COPY . ./src/app
WORKDIR /src/app
CMD node ./src/app.js