# How to run this from another directory?
# For example:
# docker build . -t ydubovitsky/engineer-blog-react:0.0.1 -f docker/dev/Dockerfile

FROM node:alpine3.17 as build
LABEL author="y.dubovitsky"
LABEL type="static-server"
WORKDIR /react-app
COPY package.json ./
COPY package-lock.json ./

# The RUN command is only executed while the build image
RUN npm install
COPY . ./

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

ARG REACT_APP_GITHUB_URL
ENV REACT_APP_GITHUB_URL=$REACT_APP_GITHUB_URL

# that will be empty
RUN echo "DEBUG": $REACT_APP_BACKEND_URL
RUN echo "DEBUG": $REACT_APP_GITHUB_URL

RUN npm run build
RUN npm install -g serve
EXPOSE 3000
# The CMD command is only executed while the image is running
CMD serve -s build
