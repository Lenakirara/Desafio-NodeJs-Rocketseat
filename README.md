# Boas vindas ao repositório do projeto de Resumo de Estudos!

### 🚀 [Desafio] - Node.js (Express) - Rocketseat

## Sobre o projeto

O projeto baseia-se em vários desafios propostos durante o evento Do While - 2021 promovido pela Rocketseat!

Dos desafios propostos escolhi o de Node.Js (Express).

Nesse desafio temos que desenvolver uma aplicação com seguinte tema: "Pensando em construir o futuro, como você solucionaria os problemas de acesso à educação hoje, utilizando a tecnologia?". Veja mais informações sobre os desafios [aqui](https://efficient-sloth-d85.notion.site/Instru-es-dos-desafios-f2f2c5574cf640c59de425413f60c8eb) 💜

Pensando nisso resolvi desenvolver uma aplicação em que usuario cadastrado poderá ter sua própria biblioteca de resumos de estudo. ou seja, o usuario poderá inserir nessa aplicação um título e subtítulo, bem como o resumo referente a esse estudo. E assim poder compartilhar com outras pessoas o que aprendeu.

Para essa aplicação utilizei arquitetura MSC em que é possível fazer cadastro e login de usuário, onde apenas a pessoa devidamente cadastrada poderá acessar, modificar e deletar os resumos de estudos que forem cadastrados.

## Funcionalidades

O programa deve ser capaz de:
- Cadastrar usuário
- Fazer login do usuario por meio da validação do token
- Criar, editar e deletar um cadastro de resumo de estudo após validação do token

## Habilidades desenvolvidas

1 - Node.Js (express)

2 - MongoDB

3 - Arquitetura MSC

4 - Autenticação JWT


## Para rodar o projeto

1 - Clone o repositório
`git@github.com:Lenakirara/Desafio-Nodejs-Rocketseat.git`

2 - Entre na pasta do repositório clonado
`cd Desafio-Nodejs-Rocketseat`

3 - Instale as dependencias
`npm install` ou `yarn install`

4 - Durante o desenvolvimento do projeto, start o mongoDB
`sudo service mongod start`

5 - Para saber se o mongoDB foi iniciado
`sudo service mongod status`

## Como desenvolver

O banco terá duas coleções: usuários e resumo de estudo

1 - Coleção de usuário: `users`
```json
{ 
  "name" : "nome usuario", 
  "email" : "email@email.com", 
  "password" : "12345678"
}
```
1.1 - Resposta da criação do usuario
```json
{ 
  "name": "nome usuario",
  "email": "email@email.com",
  "_id": "61bf4b709a0263717280f0f4"
}
```

2 - Login do usuario cadastrado
```json
{ 
  "email": "email@email.com",
  "password" : "12345678"
}
```
2.1 - Resposta do login com token gerado
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjFiZjRiNzA5YTAyNjM3MTcyODBmMGY0In0sImlhdCI6MTYzOTkyNjY2MCwiZXhwIjoxNjQyNTE4NjYwfQ.JBY5fIt9PDpW8y4Fu5wgoGrngMqc43qLRRcT0k8Xbtg"
}
```

3 - Coleção de resumo de estudo: `summaries`
```json
{
  "title": "Wat is Lorem Ipsum",
  "subtitle": "Neque porro quisquam est qui dolorem ipsum ",
  "abstract": "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken."
}
```
3.1 - Resposta da criação do resumo de estudo
```json
{
  "_id": "61bf4c1a377c7e96cb06cbde",
  "title": "Wat is Lorem Ipsum",
  "subtitle": "Neque porro quisquam est qui dolorem ipsum ",
  "abstract": "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken."
}
```
(OBS.: O _id é criado automaticamente no mongodb)

## Implementações futuras

1 - Adicionar mais funcionalidades na criação da biblioteca de resumo:
- Possibilidade de separar os estudos por categoria

2 - Adicionar testes:
- Cadastro e login de usuários
- Cadastro de resumo de estudos

3 - Fazer uma aplicação front-end para melhor vizualização.

4 - Deploy
