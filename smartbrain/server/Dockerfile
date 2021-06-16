FROM node:14.12.0

# Create app directory
RUN mkdir -p /smartbrain/server
WORKDIR /smartbrain/server

# Install app dependencies
COPY package.json /smartbrain/server
RUN npm install

# Bundle app source
COPY . /smartbrain/server

# Build arguments
ARG NODE_VERSION=14.12.0

# Environment
ENV NODE_VERSION $NODE_VERSION