FROM node:16.17.0
COPY package.json .
COPY . .
RUN npm install -g npm@9.7.2
RUN npm install --force
RUN npm run build
RUN npm install -g serve
