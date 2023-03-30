# Atividade 5 - API

## 1. O que é uma API?
API significa "Application Programming Interface" ou "Interface de Programação de Aplicativos", em português. É um conjunto de padrões e regras que definem como as diferentes aplicações podem se comunicar e trocar informações entre si.

## 2. Para que serve uma API?
As APIs servem para permitir que diferentes sistemas e aplicações se integrem e se comuniquem, trocando informações de forma automatizada e eficiente. Isso permite que os desenvolvedores criem novos serviços e funcionalidades, sem precisar criar tudo do zero.

## 3. Como as APIs funcionam?
As APIs funcionam como uma espécie de ponte que conecta duas aplicações diferentes. Elas permitem que uma aplicação envie uma solicitação de dados para outra aplicação e receba uma resposta com as informações solicitadas. Para isso, as APIs usam protocolos de comunicação, como o HTTP, e formatos de dados padronizados, como o JSON ou XML.

## 4. Quais são os tipos de APIs?
Existem diversos tipos de APIs, como as APIs REST, SOAP, GraphQL, entre outras. Cada tipo de API possui suas próprias características e funcionalidades, e é importante escolher o tipo certo para cada caso de uso.

## 5. Como utilizar uma API?
Para utilizar uma API, os desenvolvedores precisam seguir as instruções e regras definidas pela documentação da API. É necessário entender como enviar solicitações para a API e como interpretar as respostas recebidas. Também é importante respeitar as limitações e regras definidas pelos provedores de API, como limites de uso e autenticação de usuários.

## 6. Requisições HTTP

Requisições são solicitações que um cliente faz a um servidor para obter informações ou executar uma ação. As requisições são geralmente feitas usando o protocolo HTTP (Hypertext Transfer Protocol), que é um protocolo padrão da Internet para a comunicação entre clientes e servidores.

Por exemplo, quando você acessa um site em seu navegador, ele envia uma solicitação ao servidor do site pedindo as informações da página. O servidor, por sua vez, envia uma resposta ao cliente contendo as informações da página solicitada, como texto, imagens, vídeos, etc. Essa solicitação e resposta são chamadas de requisição e resposta HTTP, respectivamente.

### 6.1 Tipos de requisições
Existem vários tipos de requisições que podem ser feitas em uma API, mas os mais comuns são:

-GET: é uma requisição para obter informações de um recurso específico. Por exemplo, se você deseja obter informações de um produto específico em um site de e-commerce, pode enviar uma requisição GET para a API correspondente.

-POST: é uma requisição para criar um novo recurso. Por exemplo, se você deseja criar um novo usuário em um sistema, pode enviar uma requisição POST para a API de usuários.

-PUT: é uma requisição para atualizar um recurso existente. Por exemplo, se você deseja atualizar as informações de um produto em um site de e-commerce, pode enviar uma requisição PUT para a API correspondente.

-DELETE: é uma requisição para excluir um recurso existente. Por exemplo, se você deseja excluir um usuário em um sistema, pode enviar uma requisição DELETE para a API de usuários.

-PATCH: é uma requisição para atualizar parcialmente um recurso existente. Por exemplo, se você deseja atualizar apenas o nome de um produto em um site de e-commerce, pode enviar uma requisição PATCH para a API correspondente.

Esses são apenas alguns exemplos de tipos de requisições que podem ser feitas em uma API. Cada tipo de requisição tem uma finalidade específica e deve ser usada de acordo com as necessidades da aplicação.

## 7. Status Code
Status code, ou código de status, são códigos numéricos que indicam o resultado de uma requisição HTTP entre um cliente (geralmente um navegador web) e um servidor. Esses códigos são importantes porque fornecem informações sobre o resultado da solicitação, permitindo que o cliente saiba se a solicitação foi bem-sucedida, se houve algum erro ou se é necessário tomar alguma ação adicional.

Existem vários códigos de status HTTP, mas os mais comuns são:

2xx (sucesso): indica que a requisição foi bem-sucedida, como o código 200 (OK), que é enviado quando uma página web é carregada corretamente.

3xx (redirecionamento): indica que o servidor está redirecionando o cliente para outra página, como o código 302 (Found), que é enviado quando uma página foi movida para um novo endereço.

4xx (erro do cliente): indica que houve algum erro por parte do cliente, como o código 404 (Not Found), que é enviado quando uma página não existe ou não pode ser encontrada.

5xx (erro do servidor): indica que houve um erro por parte do servidor, como o código 500 (Internal Server Error), que é enviado quando ocorre um erro interno no servidor.

Os códigos de status são importantes para os desenvolvedores web porque ajudam a identificar e corrigir erros em suas aplicações. Além disso, eles também são úteis para o monitoramento e análise do desempenho de um site, permitindo identificar problemas de usabilidade ou falhas de segurança.

## 7. Conclusão

No começo todos esses conceitos podem parecer confusos, no entanto, quando colocarmos em prática esses conceitos, você verá que são de fácil entendimento e fundamentais para o desenvolvedor back-end.