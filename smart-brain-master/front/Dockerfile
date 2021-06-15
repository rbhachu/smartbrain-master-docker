FROM node:14.12.0

# Create app directory
RUN mkdir -p /usr/src/smart-brain
WORKDIR /usr/src/smart-brain

# Install app dependencies
COPY package.json /usr/src/smart-brain
RUN npm install

# Bundle app source
COPY . /usr/src/smart-brain

# Build arguments
ARG NODE_VERSION=14.12.0

# Environment
ENV NODE_VERSION $NODE_VERSION