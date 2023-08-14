# HILL Personalizados / NodeJS + MySQL

Sistema desenvolvido com NodeJS + MySQL para o Trabalho Prático da disciplina de Banco de Dados I, com o objetivo de gerir as principais informações de uma loja fictícia. O sistema realiza cadastro de clientes e funcionários, registra e apura pedidos e por fim armazena produtos realizando controle de estoque.

A estrutura da API foi feita a mão usando JavaScript, utilizando conceitos de Banco de Dados Relacional.

<a href="https://drive.google.com/file/d/1Efb_8c11k8Qe06u0QDgY5gdfH6nF43gb/view?usp=sharing" style="font-size: 16px">Modelo Entidade-Relacionamento</a>
<br>
<a href="https://drive.google.com/file/d/1LN4yZpHRLon3j5Jxm0CxWViOw49MI6qi/view?usp=sharing" style="font-size: 16px">Mapeamento Conceitual-Lógico do Sistema</a>

A loja de jogos fictícia em questão é a "HILL Personalizados", e as operações da API são: Create, Read, Update e Delete (CRUD).

Todas as tecnologias utilizadas foram:
<div style="display: inline_block">
    <h3>Web Development:</h3>
    <img align="center" alt="Mat-HTML" height="30" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
    <img align="center" alt="Mat-CSS" height="30" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
    <img align="center" alt="Mat-Js" height="30" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
    <h3>Frameworks, Platforms and Libraries:</h3>
    <img align="center" alt="Mat-Node" height="30" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img align="center" alt="Mat-React" height="30" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
    <img align="center" alt="Mat-Exp" height="30" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
    <img align="center" alt="Mat-Npm" height="30" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white">
    <img align="center" alt="Mat-Ins" height="30" src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE">
    <h3>Databases:</h3>
    <img align="center" alt="Mat-MySQL" height="30" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"> 
</div>

# Final Result 

<img src="frontend\src\assets\WebPreview.png" alt="Web Version"/> 

## Starting 

Para usar o projeto, siga os passos abaixo:
1. Faça o download de todos arquivos neste repositório usando `git clone <link do repositório>`;
2. Inicie um servidor de banco de dados no MySQL e execute o arquivo `bd.sql`;
3. Modifique os campos `user, password, database` no arquivo `api/infra/database.js` com os dados de acesso do seu servidor de Banco de Dados;
4. Instale as dependências da API e do FRONTEND com o comando `npm install`;
5. Inicie o servidor da API com o comando `npm start`;
6. Inicie o servidor do frontend com o comando `npm run start`;
7. Acesse o endereço `http://localhost:<Porta do server frontend>` em algum navegador web;

O Projeto está sujeito a melhorias futuramente

--- 
