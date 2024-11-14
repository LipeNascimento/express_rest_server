
## ⚙️ Projeto de Servidor REST e Aplicação Web com Docker

## 📌 Descrição
Este projeto consiste em dois containers Docker:

Um servidor REST criado com Node.js e Express, que fornece uma API simples.
Uma aplicação web com Nginx, que acessa os dados da API e exibe em uma página HTML.

**UC: Sistemas distribuídos e mobile** 

### 📋 Objetivo
Este projeto tem como objetivo criar uma aplicação web simples em um ambiente containerizado usando Docker, onde:

* Um servidor REST criado com Node.js e Express responde a requisições API, oferecendo dados para uma aplicação cliente.
* Uma aplicação web, servida por um servidor Nginx, consome os dados fornecidos pelo servidor REST e exibe-os em uma página HTML.


### 🔧 Estrutura do Projeto
  
- **express_rest_server**: Contém o servidor REST em Node.js.
- **Dockerfile**: Define o ambiente e a configuração do container para o servidor REST.
- **server.js**: Código principal do servidor Express.
- **package.json**: Dependências do projeto.
- **nginx_web_app**: Contém a aplicação web em HTML/JavaScript com o servidor Nginx.
- **Dockerfile**: Define o ambiente e a configuração do container para o servidor Nginx.
- **html/index.html**: Página web que consome a API.



## ✒️ Autor

- Felipe Reis Nascimento – 323210811
