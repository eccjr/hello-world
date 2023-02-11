# Atividade 7 - Outras funcionalidades do JavaScript

Nessa atividade vamos voltar a trabalhar com o template do Bodybuilding e o nosso objetivo será aprender sobre input masks e navegação utilizando JavaScript.

A atividade será efetuar a manipulação do DOM necessária para adicionar duas funcionalidades ao nosso template Bodybuilding: a primeira é adicionar máscara de input, ou seja, um código em JavaScript que irá formatar os dados inseridos pelo usuário no formato necessário. A segunda funcionalidade será inserir um menu de navegação (navbar) com 4 itens: "Increase 1", "Videos", "Increase 2" e "Reviews".

Para utilizar a máscara de input, utilizaremos a biblioteca Vanilla Masker, que é muito simples de usar.
Link da documentação do Vanilla Masker: https://vanilla-masker.github.io/vanilla-masker/
Basta importar a biblioteca, no HTML e adicionar o seguinte código ao JavaScript do site para adicionar uma máscara ao input do telefone:

```javascript
VMasker(document.querySelector('#phone')).maskPattern('(99) 9999-9999');
```

Quanto ao navbar, o procedimento será substituir onde está escrito _"Increase your muscle size & strength"_ no canto superior direito da tela, por uma lista de links que, usando flex box, será estilizada para permanecer na horizontal e com o mesmo estilo de texto do site.

Para essa funcionalidade, não será necessário usar nenhuma biblioteca, porém usaremos um código javascript para criar um scroll macio para a section que desejamos. Isso não seria necessário, pois os navegadores suportam ir até um elemento usando `#id-do-elemento` no final da URL. No entanto, essa funcionalidade padrão do navegador não permite scroll macio.

Portanto, para implementarmos isso, será necessário adicionar o seguinte código JavaScript:

```javascript
document.querySelectorAll('a[href^="#"]').forEach(function (element) {
  if (!element.hash) return;
  if (element.origin + element.pathname !== self.location.href) return;

  (function (destination) {
    element.addEventListener(
      'click',
      function (event) {
        window.scrollTo({
          top: destination.offsetTop,
          behavior: 'smooth',
        });
        event.preventDefault();
      },
      false
    );
  })(document.querySelector(element.hash));
});
```
