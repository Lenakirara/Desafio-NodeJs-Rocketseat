const app = require('./app');

const PORT = 3000;
const HOST = 'http://localhost/';

app.listen(PORT, () => console.log(`Rodando em ${HOST}:${PORT}`))