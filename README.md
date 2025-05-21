> Libs instaladas:
>
> typescript,
>
> express,
>
> cors,
>
> dotenv,
>
> prisma,
>
> mysql,
>
> jsonwebtoken
>
> bcrypt
>
> nodemon
>
> ---
>
> Estrutura:
>
> backend/
> ├── prisma/
> │   ├── schema.prisma
> │   └── migrations/
> ├── src/
> │   ├── config/
> │   │   └── prisma.ts
> │   ├── controllers/
> │   │   ├── artigo.controller.ts
> │   │   └── user.controller.ts
> │   ├── middlewares/
> │   │   └── auth.middleware.ts
> │   ├── routes/
> │   │   ├── artigo.routes.ts
> │   │   ├── user.routes.ts
> │   │   └── index.ts     ← junta todas as rotas
> │   ├── utils/
> │   │   └── jwt.ts       ← geração e verificação de token JWT
> │   ├── app.ts           ← configura o app Express
> │   └── server.ts        ← inicializa o servidor
> ├── .env
> ├── .gitignore
> ├── package.json
> ├── tsconfig.json


---


Testes Postman

Cadastro de usuário (/api/users/register)
Método: POST

URL: http://localhost:3000/api/users/register
Header: Content-Type: application/json
Body: tipo raw com um JSON válido.
{
  "nome": "Teste",
  "email": "teste@example.com",
  "senha": "123456"
}

Login (/api/users/login)
Método: POST

URL: http://localhost:3000/api/users/login
Header: Content-Type: application/json
Body: tipo raw com um JSON válido.
{
  "email": "laura@example.com",
  "senha": "123456"
}
