# Repositório Hello World da eccjr

Esse repositório contém informações sobre a capacitação da [eccjr](https://eccjr.com.br), bem como o seu fluxo de trabalho padrão.

## Fluxo de trabalho padrão

Utilizamos o Github para manter nossos projetos e para a execução de rotinas de entrega contínua.

**Comandos do workflow:**

1. Criar nova branch:

   `git checkout -b feature-nova`

2. Adicionar os arquivos para a staging area e commitar:

   `git add --all`

   `git commit -m "nova featura adicionada"`

3. Enviar as alterações para o repositório remoto e criar um novo PR:

   `git push origin feature-nova`

4. Caso haja uma alteração a ser feita no PR:

   `git add --all`

   `git commit --amend`

   `git push origin feature-nova -f`

5. Para baixar as novas alterações depois de mergear o PR:

   `git checkout master`

   `git fetch`

   `git pull origin master --rebase`

6. Para limpar o repositório local:

   `git remote prune origin`
   `git branch -D feature-nova`

## Processo seletivo e capacitação

O Processo seletivo e capacitação na eccjr é feito anualmente e abrange conceitos básicos de desenvolvimento web com as linguagens HTML, CSS e JavaScript.

Durante o processo, são realizadas 8 atividades:

1. [Atividade 1 - Git e Github](/processo_seletivo/atividade_1.md)

2. [Atividade 2 - HTML](/processo_seletivo/atividade_2.md)

3. [Atividade 3 - CSS e Flex Box](/processo_seletivo/atividade_3.md)

4. [Atividade 4 - Prática Flex Box](/processo_seletivo/atividade_4.md)

5. [Atividade 5 - Introdução ao JavaScript](/processo_seletivo/atividade_5.md)

6. [Atividade 6 - Manipulação do DOM com JavaScript](/processo_seletivo/atividade_6.md)

7. [Atividade 7 - Outras funcionalidade do JavaScript](/processo_seletivo/atividade_7.md)

8. [Atividade 8 - Requisições e respostas HTTP e AJAX](/processo_seletivo/atividade_8.md)


## Cursos gratuitos aprovados
<br>

`Cursos front-end`

- [HTML & CSS Full Course - Beginner to Pro 2022](https://www.youtube.com/watch?v=G3e-cpL7ofc&list=WL&index=3&t=62s)

- [React Crash Course for Beginners 2021 - Learn ReactJS from Scratch in this 100% Free Tutorial!](https://www.youtube.com/watch?v=Dorf8i6lCuk)

`Cursos Back-end`

   - [Curso de Node.js completo com Typescript, Jest, TDD, Github...](https://www.youtube.com/watch?v=W2ld5xRS3cY&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&index=2&ab_channel=WaldemarNeto-DevLab)

`Cursos UX/UI`

- [UX / UI: Fundamentos para o design de interface Gratuito](https://www.coursera.org/learn/ux-ui-design-de-interface)

- [UX Fiap on](https://on.fiap.com.br/local/programaeucapacito/)

- [UX e UI Design Tim Tec](https://cursos.timtec.com.br/course/ux-e-ui-design/intro)

`Cursos figma`

- [Figma - Criando interfaces do zero até o protótipo final](https://www.cursae.com.br/cursos/figma-criando-interfaces-do-zero-ate-o-prototipo-final)

<br>

## Cursos pagos aprovados (confia no vintão)
<br>

`Cursos front-end`
- [Curso Web Moderno Completo com JavaScript 2022 + Projetos](https://www.udemy.com/course/curso-web/)

`Cursos de front-end e back-end`

- [Cursos de Maximilian Schwarzmüller instrutor da udemy](https://www.udemy.com/user/maximilian-schwarzmuller/)
