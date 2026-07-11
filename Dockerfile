FROM node:20-alpine

WORKDIR /app

# Instala dependências do sistema necessárias para algumas libs node se necessário
RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
