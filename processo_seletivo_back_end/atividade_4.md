# Atividade 4 - Express.js

Express.js é uma ferramenta que ajuda os desenvolvedores a criar aplicativos para a internet, como sites e APIs, de forma mais fácil e rápida. Ele fornece um conjunto de recursos prontos que permitem lidar com requisições e respostas HTTP, gerenciar rotas, trabalhar com templates e outras tarefas comuns no desenvolvimento web. Com o Express.js, os desenvolvedores podem criar aplicativos web mais eficientes e com menos esforço.

Antes de mostrarmos na prática como o Express funciona com o JavaScript, veremos o conceito de NPM, que será o nosso gerenciador de pacotes.

## NPM

O NPM (Node Package Manager) é uma ferramenta que ajuda os desenvolvedores a gerenciar as bibliotecas e pacotes que são usados em suas aplicações. Ele funciona como uma espécie de loja virtual de pacotes, onde é possível encontrar e instalar pacotes desenvolvidos por outros programadores, como frameworks, bibliotecas e plugins. Com o NPM, os desenvolvedores podem economizar tempo e esforço ao não precisarem criar tudo do zero, e ainda garantem que estão usando pacotes de qualidade e segurança comprovadas.

## Criando nosso projeto

O Express será instalado utilizando o nosso gerenciador de pacotes NPM, então crie uma nova pasta e abra ela no seu editor de código. Abra o terminal de seu sistema operacional na pasta que você criou (se estiver no VSCode vá no topo do software e vá na opção Terminal -> Novo terminal) e digite o seguinte comando:

```bash
npm init -y
```

Esse comando serve para inicializar um novo projeto. Um arquivo chamado package.json será gerado ao executar esse comando, ele contém informações sobre o projeto. O parâmetro "-y" que está no comando indica que queremos criar o projeto sem informar sobre o que o projeto se trata, se você remover ele e executar o comando ele perguntará informações a você, como autor do projeto, nome do projeto, etc.

## Instalando o Express.js

Para instalar o Express no nosso projeto, devemos executar o seguinte comando:

```bash
npm install express
```

Veja que foi criado uma pasta no seu projeto chamada "node_modules", os arquivos do Express está nessa pasta, além de diversas outras bibliotecas fundamentais para execução do seu projeto.

## Criando o nosso primeiro servidor

Agora que temos o Express instalado, aqui está um exemplo de como que podemos criar um servidor utilizando o Express:

```javascript
const express = require('express')

const app = express()

const port = 8080

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})
```

Vamos conferir o que está acontecendo em cada linha do nosso código:

```javascript
const express = require('express')
```

Nesta linha, estamos importando o módulo Express e guardando ele em uma contante chamada "express"

```javascript
const app = express()
```

Esta linha cria um novo aplicativo Express e o armazena em uma constante chamada "app". O objeto "app" é usado para definir as rotas do servidor e outras configurações.

```javascript
const port = 8080
```

Esta linha define a porta em que o servidor vai rodar. Neste caso, está definido para a porta 8080 (evitamos utilizar a porta 3000 pois geralmente é a porta que é escolhi para rodar aplicações front-end).

```javascript
app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})
```

Esta linha inicia o servidor e faz ele rodar na porta definida anteriormente. O método "listen" é um método do objeto "app" que inicia o servidor. Quando o servidor é iniciado, a função de callback é executada e exibe uma mensagem no console indicando que o servidor está rodando na porta definida.
