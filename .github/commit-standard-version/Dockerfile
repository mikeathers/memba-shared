FROM node:12-alpine3.12

RUN apk --no-cache add curl jq bash git

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
