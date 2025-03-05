# Novo Museu Virtual (Trem Virtual)

Este projeto foi reprojetado por Filipe Fernandes.

## Trabalhos Relacionados

- Acesse esse [site que lista 30 museus virtuais](https://educacao.sme.prefeitura.sp.gov.br/noticias/30-museus-virtuais-para-voce-visitar-sem-sair-de-casa/)
- Faça uma análise de funcionalidades destes museus virtuais e salve [nesta planilha ](https://docs.google.com/spreadsheets/d/1cLrjxU_usPfNqVd43Tkb6Te5HVrMuZyO6V4CfmDqfn0/edit?usp=sharing)

**OBSERVAÇÃO**:
- Somente deverão ser considerados museus virtuais como tour virtual. Exemplos: `Google Arts & Culture` e `Museu da Casa de Portinari`
- Os museus que estiverem usando o `Google Art & Culture`, suas funcionalidades devem ser registradas na coluna `Google Art & Culture` 
- Cada museu virtual deverá ser analisado a partir de 2 dispositivos: `Computador` e `Celular`. Registre as funcionalidades conforme as abas da planilha relacionada com o dispositivo.

## Histórias do Usuário

- Como um estudante, eu quero acessar o Museu Virtual para conhecer a história de Manhuaçu
- ...

## Comandos
- `npm start`: inicia o projeto no ambiente de produção
- `npm run dev`: inicia o projeto no ambiente de desenvolvimento
- `npm run build`: gera o arquivo `./public/javascripts/bundle.js` que compila todos as bibliotecas JavaScript definadas em `./src/main.js`
- `build-dev`: builda e inicia o projeto no ambiente de desenvolvimento


## Procedimentos ao instalar o Aframe e outros pacotes JS front-end via npm
- `npm install NOMEDOPACOTE`
- Inserir em `/.src/main` `require('NOMEDOPACOTE');`


## Estrutura de arquivos paras mundos virtuais

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

