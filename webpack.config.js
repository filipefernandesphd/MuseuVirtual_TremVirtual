const path = require('path');

module.exports = {
  entry: './src/main.js', // Arquivo principal do projeto
  target: 'node', // Indica que estamos rodando no ambiente Node.js
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, './public/javascripts/'), // Diretório onde o bundle será salvo
  },
  mode: 'development', // Pode ser 'development' ou 'production' para otimizar
};