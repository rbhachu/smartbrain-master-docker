FROM node:14.12.0

# Create app directory
RUN mkdir -p /smartbrain/client
WORKDIR /smartbrain/client

# Install app dependencies
COPY package.json /smartbrain/client
RUN npm install

# Bundle app source
COPY . /smartbrain/client

# Build arguments
ARG NODE_VERSION=14.12.0

# Environment
ENV NODE_VERSION $NODE_VERSION