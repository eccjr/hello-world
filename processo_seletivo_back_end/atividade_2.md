# Atividade 2 - JavaScript

JavaScript é uma linguagem de programação de alto nível que é usada para criar e desenvolver aplicativos web. Ela é uma linguagem interpretada, o que significa que o código JavaScript é executado diretamente em um navegador web, sem a necessidade de compilação.

## 1. Variáveis

Variável é o nome utilizado para definir um ou mais valores que são manipulados pelos programas durante a sua execução. Veja a seguir como declarar variáveis no JavaScript.

```javascript

const nome = "Aleardo"; // variável "nome" que armazena um dado do tipo string (texto)
let idade = 151; // variável "nome" que armazena um dado do tipo number
let feliz = false; // variável "feliz" que armazena um dado do tipo boolean (verdadeiro ou falso)
const hobbies = ['C', 'lecionar', 'correr']; // variável "hobbies" que é um array que armazena diversos hobbies que Aleardo gosta

```
Nota-se que nos primeiro exemplo, declaramos a variável nome usando o termo "const", que define que essa variável não poderá ser alterada ao longo da execução do programa.
Já as variáveis idade e feliz, são declaradas usando o termo "let", que nos permite alterar seu valor ao longo da execução do programa.
Na variável hobbies, temos um array (conjunto de dados) com várias strings armazenadas.

OBS: hobbies é declarado como const mas é importante saber que no caso do array, o termo const define que a variável hobbies sempre será um array, não podendo ser alterado ao longo da execução do programa, mas permite a adição de novas strings (ou outros tipos de dados) nesse array. 

## 2. Operadores aritméticos

Em JavaScript, existem os seguintes operadores aritméticos:

- Adição (+): usado para adicionar dois valores.
- Subtração (-): usado para subtrair um valor de outro.
- Multiplicação (*): usado para multiplicar dois valores.
- Divisão (/): usado para dividir um valor pelo outro.
- Resto da divisão (%) : usado para obter o resto da divisão inteira de um número por outro.
- Incremento (++): usado para aumentar o valor de uma variável em 1.
- Decremento (--): usado para diminuir o valor de uma variável em 1.

Exemplos de uso:

```javascript
let x = 5;
let y = 2;
let resultado = x + y; // resultado é 7
resultado = x - y; // resultado é 3
resultado = x * y; // resultado é 10
resultado = x / y; // resultado é 2.5
resultado = x % y; // resultado é 1
x++; // x agora é 6
y--; // y agora é 1
```

## 3. Laço IF

O laço if em JavaScript é uma estrutura condicional que permite que o programa execute um bloco de código somente se uma determinada condição for atendida. Se a condição não for atendida, o bloco de código não será executado.

A sintaxe básica do laço if é a seguinte:

```javascript
if (condição) {
    // bloco de código a ser executado se a condição for verdadeira
}
```

Aqui está um exemplo prático:
```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

Neste exemplo, a condição é se a variável "idade" é maior ou igual a 18. Se a condição for verdadeira, o bloco de código dentro das chaves "{}" será executado e "Você é maior de idade." será impresso no console. Se a condição for falsa, o bloco de código dentro do "else" será executado e "Você é menor de idade." será impresso no console.

Você também pode usar operadores de comparação, como ">", "<", ">=", "<=", "===" e "!==" para testar diferentes condições. O laço if é uma das estruturas mais básicas e importantes da programação, e é usado em quase todos os programas para fazer escolhas baseadas em dados ou entradas de usuários.

## 4. Operadores relacionais

Em JavaScript, os operadores relacionais são usados para comparar valores e retornar um valor booleano (true ou false) indicando se a comparação é verdadeira ou falsa. Os operadores relacionais incluem:

- Igual a (==): retorna true se os dois operandos forem iguais.
- Diferente de (!=): retorna true se os dois operandos forem diferentes.
- Maior que (>): retorna true se o primeiro operando for maior que o segundo operando.
- Maior ou igual a (>=): retorna true se o primeiro operando for maior ou igual ao segundo operando.
- Menor que (<): retorna true se o primeiro operando for menor que o segundo operando.
- Menor ou igual a (<=): retorna true se o primeiro operando for menor ou igual ao segundo operando.

Exemplo de uso:

```javascript
let x = 5;
let y = 10;

if (x == y) {
  console.log("x é igual a y");
} else if (x != y) {
  console.log("x é diferente de y"); // Esta linha será impressa
}

if (y > x) {
  console.log("y é maior que x"); // Esta linha será impressa
}

if (x <= y) {
  console.log("x é menor ou igual a y"); // Esta linha será impressa
}
```

## 5. Operadores lógicos

Em JavaScript, os operadores lógicos são usados para realizar operações booleanas em expressões que podem ser avaliadas como verdadeiras ou falsas. Os operadores lógicos incluem:

- E lógico (&&): retorna true se ambos os operandos forem verdadeiros e false caso contrário.
- OU lógico (||): retorna true se pelo menos um dos operandos for verdadeiro e false caso contrário.
- NÃO lógico (!): inverte o valor booleano de uma expressão, ou seja, se a expressão for verdadeira, o operador ! a tornará falsa e vice-versa.

Exemplo de uso:

```javascript
let x = 5;
let y = 10;
let z = 15;

// Usando o operador E lógico (&&)
if (x < y && y < z) {
  console.log("y está entre x e z"); // Esta linha será impressa
}

// Usando o operador OU lógico (||)
if (x < y || y > z) {
  console.log("pelo menos uma das condições é verdadeira"); // Esta linha será impressa
}

// Usando o operador NÃO lógico (!)
if (!(x == y)) {
  console.log("x é diferente de y"); // Esta linha será impressa
}
```

## 6. Laço FOR

O laço for em JavaScript é uma estrutura de repetição que permite executar um bloco de código repetidamente por um número específico de vezes, ou com base em uma condição específica. Ele é comumente usado para iterar sobre uma lista de elementos ou realizar um conjunto de tarefas repetitivas.

A sintaxe básica do laço for é a seguinte:

```javascript
for (inicialização; condição; expressão final) {
    // bloco de código a ser executado repetidamente
}
```

Aqui está um exemplo prático:

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

Neste exemplo, a variável "i" é inicializada com o valor 0. A condição é que "i" deve ser menor que 10. O bloco de código dentro das chaves "{}" será executado repetidamente enquanto a condição for verdadeira. Em cada iteração, "i" é incrementado em 1 usando a expressão final "i++". O resultado impresso no console será de 0 a 9, porque o bloco de código será executado 10 vezes (0 a 9).

Você pode usar o laço for para iterar sobre uma lista de elementos, como uma matriz ou objeto, e realizar tarefas repetitivas com base em cada elemento. O laço for é uma das estruturas mais úteis e comuns da programação, e é essencial para muitos tipos de programas.

## 7. Laço WHILE

O laço while em JavaScript é uma estrutura de repetição que permite executar um bloco de código repetidamente enquanto uma determinada condição for verdadeira. Ele é usado para executar tarefas repetitivas quando o número de vezes que a tarefa precisa ser executada não é conhecido de antemão.

A sintaxe básica do laço while é a seguinte:

```javascript
while (condição) {
    // bloco de código a ser executado repetidamente
}
```

Aqui está um exemplo prático:

```javascript
let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
}
```

Neste exemplo, a condição é que "contador" deve ser menor que 5. O bloco de código dentro das chaves "{}" será executado repetidamente enquanto a condição for verdadeira. Em cada iteração, o valor atual de "contador" será impresso no console e então ele será incrementado em 1. O resultado impresso no console será de 0 a 4, porque o bloco de código será executado 5 vezes.

Você pode usar o laço while para executar tarefas repetitivas que dependem de uma condição específica. Ele é especialmente útil quando você não sabe quantas vezes a tarefa precisará ser executada. O laço while é uma das estruturas mais básicas da programação e é usado em quase todos os programas para executar tarefas repetitivas.