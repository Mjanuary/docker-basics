# Specify the base image
FROM node:alpine

# create a working directory
WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install

COPY ./ ./


# Default command
CMD [ "npm", "start" ] 