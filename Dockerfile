FROM node:14.12.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (package.json and package-lock.json)
COPY package.json ./
RUN npm install

# Listen port
EXPOSE 8080

# Run Node.js
#CMD [ "node", "server.js" ]
