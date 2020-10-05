FROM node:14.12.0

# Create app directory
WORKDIR /usr/src/app
RUN cd

# Install app dependencies (package.json and package-lock.json)
RUN PWD
RUN ls
COPY package.json /.
RUN npm install

# Listen port
EXPOSE 8080

# Run Node.js
#CMD [ "node", "server.js" ]
