# Etapa 1: build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: imagem final para produção
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app ./

# Instala apenas dependências de produção
RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
