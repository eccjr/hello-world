# Atividade 2 - HTML

Essa atividade será sobre os fundamentos do HTML. Vamos conhecer as tags HTML e a sua função.

## 1. Criando o primeiro arquivo HTML (e tags <html>, <head> e <body>)

Primeiro vamos abrir o nosso repositório hello-world da primeira atividade e criar um arquivo HTML.

Esse vídeo ensina a criar um arquivo HTML no vscode, além da estrutura básica de um arquivo HTML e alguns truques para inserir as tags mais rapidamente:
https://www.youtube.com/watch?v=E6CdIawPTh0&t=122s

## 2. Tags `<p>`, `<h1>`, ..., `<h6>`, `<br>` e `<hr>`

Agora vamos conhecer as tags de formatação de textos: as tags `<p>` que indicam parágrafos simples, e as tags `<h1>`, `<h2>`, ... , `<h6>` que indicam os níveis hieráquicos de título: o `<h1>` é o maior e o `<h6>` é o menor.

Esse vídeo ensina sobre formatação de texto usando a tag `<p>` e as tags de quebras `<hr>` e `<br>`:
https://www.youtube.com/watch?v=f6NTJdtEFOc&t=116s

## 3. Listas ordenadas e desordenadas

Esse vídeo ensina sobre as listas ordenadas e não ordenadas do HTML:
https://www.youtube.com/watch?v=JlE0pzESf5g&t=256s

## 4. Tabelas

Outra estrutura básica do HTML são as tabelas.

As tags usadas são:

- `<table>` Marca a tabela em si
- `<thead>` Marca o cabeçalho da tabela
- `<tbody>` Marca o corpo da tabela
- `<tr>` Marca uma linha da tabela "table row"
- `<th>` Marca um elemento do head da tabela "table header"
- `<td>` Marca um elemento do corpo da tabela "table data"

As tabelas são montadas na seguinte estrutura:

```html
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>João</td>
      <td>joao@email.com</td>
    </tr>

    <tr>
      <td>Maria</td>
      <td>maria@email.com</td>
    </tr>
  </tbody>
</table>
```

## 6. As tags `<section>` e `<div>`

Essas tags são usadas para dividir os elementos da página. O funcionamento delas é idêntico e serve para separar outros elementos em uma espécie de container, porém é uma boa prática dividí-las da seguinte forma:

A `<section>` é usada para marcar uma seção da página, ou seja, um bloco de conteúdo maior, enquanto a `<div>` é usada para marcar blocos menores de conteúdo, geralmente dentro de uma `<section>`.

Então, o interior da tag `<body>` de uma página de produtos ficaria da seguinte forma:

```html
<section>
  <!--  Início da seção de produtos -->

  <div>
    <!-- Primeiro produto -->
    <h3>Camisa</h3>
    <p>Descrição do produto camisa</p>
  </div>
  <!-- Fim do primeiro produto -->

  <div>
    <!-- Segundo produto produto -->
    <h3>Calça</h3>
    <p>Descrição do produto calça</p>
  </div>
  <!-- Fim do segundo produto -->
</section>
<!-- Fim da seção de produtos -->
```

Obs.: As tags `<!-- -->` definem comentários no HTML que não são exibidos para o usuário ao acessar esse HTML.

## Exercício: página HTML simples

Vamos agora aplicar o que aprendemos para fazer uma página HTML básica no repositório hello-world da atividade passada com o nome `index.html`.

O objetivo e deixá-la o mais próximo possível da imagem abaixo.

Depois que terminarmos, vamos commitar as alterações no repositório local com os comandos `git add .` e `git commit -m "Cria a página index.html"`. Em seguida, vamos subir o novo commit para o repositório remoto no Github, com o comando `git push`.

### Template de exemplo:

![](images/atividade2.png)
