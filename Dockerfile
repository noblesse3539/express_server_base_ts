# FROM node:lts-slim
FROM node:12.16.1-alpine3.9
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

COPY . .
EXPOSE 3000
CMD [ "npm", "start"]
