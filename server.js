const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Configuração do CORS (caso esteja acessando de um frontend separado)
app.use(cors());

// Definindo a rota para /api/data
app.get('/api/data', (req, res) => {
    res.json({ message: "Aluno: Felipe Reis Nascimento - RA: 323210811" });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});