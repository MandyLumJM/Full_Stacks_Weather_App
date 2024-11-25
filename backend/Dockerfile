FROM node:16

# Install netcat
RUN apt-get update && apt-get install -y netcat

WORKDIR /app

COPY . .

COPY package.json package-lock.json ./
RUN npm install

EXPOSE 5000

CMD ["npm", "start"]


