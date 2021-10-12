# Atividade 3 - CSS e Flex Box

Essa atividade vamos aprender os conceitos básicos de CSS mais uma introdução ao Flex Box.

## 1. O que é CSS e como usá-lo

CSS é uma linguagem de estilização que pode ser usada com HTML, XML, SVG e outros arquivos que usam o estilo XML.

No nosso caso, vamos usar CSS para estilizar páginas HTML. Isso pode ser feito de três formas: ou usando uma tag `<style>` dentro do HTML (exemplo 1), ou importando um arquivo `.css` usando a tag `<link>` no cabeçalho da página HTML (exemplo 2), ou utilizando o atributo `style` de um elemento ou tag HTML (exemplo 3).

Exemplo 1:

```html
<head>
  ...
  <style>
    body {
      background-color: #cccccc;
    }
  </style>
</head>

Exemplo 2:
<head>
  ...
  <link ref="stylesheet" src="./styles.css" />
</head>
```

Exemplo 3:

```html
<p style="color: red;">Esse texto será vermelho.</p>
```

## 2. Seletores e propriedades CSS

Os seletores CSS são padrões no código que selecionam um elemento em uma página HTML para estilizá-lo.

Exemplos:

```css
.background {
  /* seleciona elementos HTML cuja class seja "background" */
}

#product-list {
  /* seleciona o elemento cujo id seja "product-list" */
}

img,
svg {
  /* seleciona todas as tags img e svg */
}

button[type='submit'] {
  /* seleciona todos os elementos button cujo atributo type seja "submit" */
}
```

Dentro de um seletor, utilizam-se propriedades que definem um atributo estético específico dos elementos, (exemplos: cor do texto, cor do plano de fundo, borda, sombra, sombra do texto, fonte, tamanho do elemento, etc).

Exemplo: customizando os elementos cuja classe são iguais a `background`.

```css
.background {
  background-color: red; /* a cor do fundo do elemento será vermelho */
  width: 100%; /* o comprimento do elemento será o máximo possível */
  font-size: 15pt; /* o tamanho da fonte dos textos dentro desse elemento será 15pt */
  color: blue; /* a cor dos textos dentro desse elemento será azul */
}
```

A documentação da Mozilla sobre o CSS possui todos os tipos de seletores e todas as propriedades existentes:
https://developer.mozilla.org/pt-BR/docs/Web/CSS

## 3. Unidades do CSS

O  css possui várias unidades. Você provavelmente já usou a mais básica que é a px, porém, ela não é a mais recomendada de se usar.

Não fique muito preocupado com este assunto desde já, pois é algo que se pega com o tempo e a prática.

Abaixo são explicadas três das mais usadas. Se estiver em dúvida sobre qual usar, vá de rem e sem problemas.

- rem: Relativo ao font-size do elemento raiz (definido pelo navegador). Geralmente, o font-size raiz é 16px, logo, 2rem é o equivalente a 32px. O motivo desta ser a unidade mais utilizada é que os usuários podem querer que os sites que acessam tenham fontes maiores ou menores dependendo da preferência (aumentar de 16px para 32px caso tenha algum problema de vista), e o rem se adapta a isto.

- %: Relativa ao elemento pai. Por exemplo, se tivermos uma div com width de 30rem, e dentro dela colocarmos outra com width de 50%, esta terá uma largura de 15rem.

- em: Relativo ao font-size do elemento. Diferente do rem, ele se baseia ao font-size do elemento criado, como um botão por exemplo. Podemos definir o padding de um botão utilizando esta unidade, e, assim, sempre que mudarmos seu font-size, a proporção entre o tamanho da fonte e o padding será a mesma.

Se quiser entrar em mais detalhes sobre este assunto, esse vídeo será útil: https://www.youtube.com/watch?v=N5wpD9Ov_To


## 4. Curso de Flex Box

Flex Box é um Layout do CSS 3 que permite criar elementos responsivos em uma página apenas com código CSS.

A propriedade "display" do CSS define qual layout que um elemento do HTML poderá usar. Os layouts existentes são

Esse curso ensina sobre algumas propriedades do Flex Box e como estilizar uma página em HTML. São 10 vídeos que totalizam aproximadamente 1 hora:

https://www.youtube.com/watch?v=KIKekNqq3so&list=PLwXQLZ3FdTVGjLmjwfRc0Q9TA5U-PCWp4&index=1

## Atividade: página Hotel Paraíso

A atividade dessa semana vai ser criar uma página igual à do curso de Flex Box no repositório hello-world de vocês (pode sobrescrever o index.html da atividade anterior &#128513;).

Objetivo é ir se familiarizando ao poucos com as propriedades do CSS e do layout Flex Box, bem como a estrutura básica de um site em HTML, para que vocês consigam futuramente desenvolver uma página inteira a partir apenas de um protótipo (uma imagem, um projeto do Figma ou algo assim).

Divirtam-se e se precisar de alguma ajuda, procurem algum membro antigo da eccjr. Ficaremos felizes em ajudar!

## Materiais complementares :3

O Mozilla Web Docs traz um guia sobre Flex Box que pode ser muito útil:
https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
