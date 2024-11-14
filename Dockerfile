# Use uma imagem base do Node
FROM node:14

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o diretório de trabalho no container
COPY package*.json ./
COPY server.js ./

# Instala as dependências
RUN npm install

# Expõe a porta que o servidor irá usar
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "server.js"]