# Projeto Aroma & Sabor

Este é um projeto de desenvolvimento de uma aplicação web para compartilhamento de receitas gastronômicas saudáveis. Com esta aplicação, os usuários poderão consultar receitas, pesquisar e criar suas próprias receitas após realizar um cadastro. Além disso, os usuários logados poderão adicionar receitas de outros usuários aos seus favoritos para acesso rápido em suas contas.

## Funcionalidades Principais

- Listagem de receitas: Acesse a página inicial para visualizar todas as receitas disponíveis, incluindo foto e título. Ao clicar em uma receita, você será redirecionado para uma página com os ingredientes e detalhes de preparo.
- Cadastro de usuário: Utilize o formulário de registro para criar uma conta. Informe seu nome, e-mail e senha para obter um token de acesso e um ID de usuário.
- Login: Faça login na aplicação informando seu e-mail e senha.
- Criação, edição e exclusão de receitas: Utilize as rotas POST /recipes, PUT /recipes/id e DELETE /recipes/id para criar, editar e excluir uma receita, respectivamente. É necessário enviar um token de autenticação para realizar essas operações.
- Favoritar receitas: Utilize as rotas POST /favorites e DELETE /favorites para adicionar e remover receitas dos favoritos. É necessário estar logado para que o sistema capture o campo userId.

## Instalação e inicialização

1. Clone este repositório em sua máquina local.
2. Abra o terminal e acesse a pasta recipes: ` cd recipes`
3. Execute o comando npm install para instalar as dependências do projeto.
4. Execute o comando `npm run dev`
5. A aplicação vai estar rodando no http://localhost:5173/

## API

- BASE URL: https://m3-front-end-recipes.onrender.com

## Autores

- Daniele Chagas (https://github.com/danielekenziecurso)
- Emanuelle Takenawa (https://github.com/emanuelletakenawa)
- Leonardo Stafski (https://github.com/stafski)
- Odair Sobrinho (https://github.com/odair-dev)
