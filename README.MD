# Museu Virtual (Trem Virtual)


## NOTA IMPORTANTE!

Em 5/2/2025 este projeto foi redesenhado por Filipe Fernandes para atender aos requisitos básicos do desenvolvimento do projeto.

**Segue documentação das modificações**
- A estrutura de pastas do projeto foi modificada baseada nas boas práticas de desenvolvimento. Para isto, o `express-generator` foi utlizado;
- Instale o plugin [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) no VsCode para facilitar a visualização de comentários no código


## Comandos
- `npm start`: inicia o projeto no ambiente de produção
- `npm run dev`: inicia o projeto no ambiente de desenvolvimento
- `npm run build`: gera o arquivo `./public/javascripts/bundle.js` que compila todos as bibliotecas JavaScript definadas em `./src/main.js`
- `build-dev`: builda e inicia o projeto no ambiente de desenvolvimento


## Procedimentos ao instalar o Aframe e outros pacotes JS front-end via npm
- `npm install NOMEDOPACOTE`
- Inserir em `/.src/main` `require('NOMEDOPACOTE');`

## Dicas

### Uso de .jade e .html

Nos arquivos de rotas (`./routes`):
- `res.render` use para renderizar arquivos `.jade`
- `res.sendFile` use para renderizar arquivos `.html`


## ESTRUTURA DE ARQUIVOS PARA MUNDOS VIRTUAIS

- `./bin`: 
- `./public`: 
    - `3dmodels`: armazenar arquivos 3D
    - `images`: armazenar imagens
    - `javascripts`: armazenar arquivos .js
    - `stylesheets`: armazenar arquivos .css e outros de estilo
- `./routes`: arquivos que configuram as rotas da aplicação
- `./src`: contém o arquivo `main.js`, no qual define as bibliotecas .js 
- `./views`: contém os arquivos de views
- `.env`: define as variáveis de ambiente do projeto
- `.gitignore`: arquivo que ignora arquivos que não devem ser rastreados pelo git
- `app.js`: arquivo principal da aplicação
- `package.json`: arquivo que contém os comandos e dependências do projeto
- `README.MD`: contém intruções do projeto para o desenvolvedor
- `webpack.config.js`: arquivo de configuração para compilação de bibliotecas .js
