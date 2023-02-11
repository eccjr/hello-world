# Atividade 6 - Manipulação do DOM com JavaScript

Nessa atividade vamos voltar a trabalhar com o template do Bodybuilding e o nosso objetivo será consolidar o que foi aprendido com as videoaulas de JavaScript.

A atividade será efetuar a manipulação do DOM necessária para validar e enviar o formulário do header da página que foi construída na atividade 4.

Primeiramente será necessário validar o formato do dado inserido em todos os formulários dos campos. Nesse caso, será necessário validar o email, o telefone e o código postal. Para isso, pode ser necessário utilizar, além do JS puro e do `addEventListener`, algumas expressões Regex de validação.

Esse vídeo explica o que é uma expressão regular ou Regex e como definir uma expressão para validar número de CPF:
https://www.youtube.com/watch?v=d2uqo6PhdM4

O desafio de vocês será criar uma Regex para validar os campos de email, telefone e código postal, podendo usar os padrões do Brasil mesmo (Telefone: (XX) XXXXX - XXXX / Código postal: XX.XXX-XXX).

Depois de criar a Regex, vocês deverão criar um arquivo com nome `form-validation.js` e importá-lo no HTML. Nesse arquivo, vocês deverão adicionar um _event listener_ ao formulário para verificar se os valores inseridos no formulário passam nas Regex que vocês criaram.

É importante notar que não é necessário usar código JavaScript para verificar se o campo foi preechido, pois podemos apenas adicionar um `required` às tags `<input>` no nosso HTML para impedir que o usuário submeta o formulário com os campos vazios.

Depois de validado, a página deve mostrar um _alert_ com a mensagem "Obrigado por se cadastrar, (nome inserido no formulário)!"

Ao fazer isso, é importante usar o método `event.preventDefault()` para evitar que o formulário envie uma requisição a mais para a sua página ao ser submetido e que os valores nos campos do formulário sejam inseridos na URL (porque é isso que o formulário HTML faz por padrão).
