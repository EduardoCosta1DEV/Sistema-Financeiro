// Importa o framework Express
const express = require('express');
// Importa a bilbioteca CORS
const cors = require('cors');

// Inicializa a aplicaão Express
const app = express();

// Define a porta em que o servidor vai rodar
// Ele vai tntar usar a porta definida no ambiente, ou a 5000 como padrao
const PORT = process.env.PORT || 5000;

// Aplica midllewares
app.use(cors()); // Permite que o frontend acesse o backend
app.use(express.json()); // Permite que o servidor entenda requisiões com o corpo no formato JSON

// Cria uma rota de teste para a raiz do servidor ("/")
// req = requisicao, res = resposta
app.get('/', (req, res) => {
    res.json({ message: 'API do Sistema Financeiro está funcionando!'})
});

// Inicia o servidor e o faz "escutar" na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
