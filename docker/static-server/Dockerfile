# How to run this from another directory?
# For example:
# docker build . -t ydubovitsky/engineer-blog:0.0.1 -f docker/production/Dockerfile

# build environment
FROM node:14.15.1 as build
LABEL author="y.dubovitsky"
LABEL type="static-server"
WORKDIR /react-app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
# RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# The RUN command is only executed while the build image
RUN npm install
COPY . .
# The RUN command is only executed while the build image
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
RUN serve -s buile