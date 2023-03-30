# Atividade 6 - Requisições HTTP

Como vimos na atividade 5, a realização de requisições HTTP acontecem a todo momento, tanto do lado do cliente, quanto do programador. Agora vamos mostrar como realizar requisições HTTP no nosso projeto em Node.JS.
Vamos utilizar como base, o nosso código que foi criado na atividade 4:

```javascript
const express = require('express')

const app = express()

const port = 8080

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})
```
Segue o passo a passo para trabalhar com requisições HTTP:

## 1. CORS

A biblioteca CORS é uma ferramenta que permite que um site ou aplicação web possa interagir com recursos (como APIs ou dados) de outros sites, mesmo que esses sites estejam em domínios diferentes.

Para adicionar o CORS a nossa aplicação, basta abrir o terminal no nosso projeto e digitar a seguinte linha de comando:

```bash
npm install cors
```

Após fazer a instalação, vamos importar o módulo CORS após a importação do módulo Express, e guardar ele em um constante chamada "cors":

```javascript
const express = require('express')
const cors = require('cors')

const app = express()

const port = 8080

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})
```

Após a declaração da constante "app", vamos adicionar a seguinte linha de código:

```javascript
app.use(cors())
```

Esta linha adiciona o middleware (é uma função que é executada entre a requisição HTTP, e a resposta do servidor. Ex: um middleware que verifica se um usuário está logado no sistema toda vez que for feita uma requisição) do CORS na aplicação Node.js. Essa linha permite que a aplicação aceite requisições de outros domínios, configurando os cabeçalhos HTTP necessários para que a requisição seja permitida. Em outras palavras, essa linha de código permite que a aplicação receba e envie dados para outras aplicações e domínios.

O seu código deve ficar parecido da seguinte maneira:

```javascript
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const port = 8080

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})
```

## 2. Criando nossa primeira rota

Rotas são caminhos que um usuário pode seguir dentro de uma aplicação web ou mobile para acessar diferentes páginas ou funcionalidades.

Por exemplo, imagine um site de comércio eletrônico que tenha uma rota para a página inicial, outra para a página de produtos, outra para a página de carrinho de compras e outra para a página de checkout. Cada uma dessas rotas representa uma parte da aplicação e é acessada por um endereço específico (geralmente definido na barra de endereços do navegador).

As rotas permitem que o usuário navegue pela aplicação de forma organizada e intuitiva, acessando apenas as partes que são relevantes para ele em cada momento.

Ex: http://google.com.br/maps

Todos conhecemos o site da Google, o motor de pesquisa mais famoso do mundo, O link acima nos direciona para o Google Maps. O `/maps` é uma das rotas do site da Google, onde ao acessá-la entramos no Google Maps.

Para gerenciar rotas em nossa aplicação, devemos criar um Router, que é a entidade responsável por gerenciar todas as rotas da nossa aplicação. Para isso, basta acrescentar a seguinte linha de código após o `app.use(cors)`:

```javascript
const router = Router()
```

Quando acessamos qualquer tipo de site, estamos fazendo uma requisição do tipo GET