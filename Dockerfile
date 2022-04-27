# Node LTS version based on Alpine 3.14
# End-of-life at 2024-04-30
FROM node:16.14.0-alpine3.14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
RUN yarn install
RUN apk add --update --no-cache

# Bundle app source
COPY . .

# Exports
EXPOSE 3000

CMD [ "yarn", "run", "start" ]