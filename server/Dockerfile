FROM alpine:3.3
RUN apk add --update --no-cache nodejs
RUN apk add --no-cache make gcc g++ python
RUN npm config set registry http://registry.npmjs.org/
VOLUME /server
WORKDIR /server
