> # 🚀 API de Artigos
>
> Esta é uma API RESTful para gerenciamento de artigos e usuários, desenvolvida com Node.js, Express e MySQL.
>
> ## ✨ Tecnologias Utilizadas
>
> Este projeto utiliza as seguintes tecnologias:
>
> * **TypeScript**: Para tipagem estática e um código mais robusto.
> * **Express.js**: Framework web para Node.js, facilitando a criação de rotas e middlewares.
> * **CORS**: Middleware para habilitar o Cross-Origin Resource Sharing.
> * **Dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.
> * **Prisma**: ORM moderno e de próxima geração para bancos de dados.
> * **MySQL**: Sistema de gerenciamento de banco de dados relacional.
> * **JSON Web Token (JWT)**: Para autenticação de usuários baseada em tokens.
> * **Bcrypt**: Para hash de senhas de forma segura.
> * **Nodemon**: Para reiniciar automaticamente o servidor durante o desenvolvimento.
>
> ---
>
> ## 📂 Estrutura do Projeto
>
> A estrutura do projeto é organizada da seguinte forma:
>
> ├── node_modules/
>
> ├── dump/				# contem o backup do banco de dados
> │   └── blog.sql
> ├── prisma/
> │   ├── schema.prisma                  # Definição do esquema do banco de dados
> │   └── migrations/                    # Migrações do Prisma
> ├── src/
> │   ├── config/
> │   │   └── prisma.ts                  # Configuração da instância do Prisma Client
> │   ├── controllers/
> │   │   ├── artigo.controller.ts       # Lógica para manipulação de artigos
> │   │   └── user.controller.ts         # Lógica para manipulação de usuários
> │   ├── middlewares/
> │   │   ├── artigo.middleware.ts       # Middleware para autenticação JWT
> │   │   └── auth.middleware.ts         # Middleware para autenticação JWT
>
> │   ├── routes/
> │   │   ├── artigo.routes.ts           # Definição das rotas de artigos
> │   │   ├── user.routes.ts             # Definição das rotas de usuários
> │   │   └── index.ts                   # Agrega todas as rotas da API
> │   ├── utils/
> │   │   └── jwt.ts                     # Funções para geração e verificação de tokens JWT
> │   ├── app.ts                         # Configurações principais do aplicativo Express
> │   ├── config.ts                      # Validação da variável de ambiente JWT_SECRET
> │   └── server.ts                      # Ponto de entrada que inicializa o servidor
> ├── .env                               # Variáveis de ambiente (ex: DATABASE_URL, JWT_SECRET)
> ├── .gitignore                         # Arquivos e diretórios a serem ignorados pelo Git
> ├── package.json                       # Metadados do projeto e dependências
> └── tsconfig.json                      # Configurações do TypeScript

---

## 🛠 Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/LauraJaneAntunes/Back_Blog.git](https://github.com/seu-usuario/seu-repositorio.git)
   cd seu-repositorio/backend
   ```
2. **Instale as dependências:**

   ```bash
   npm install
   # ou yarn install
   ```
3. **Configure o arquivo `.env`:**
   Crie um arquivo `.env` na raiz da pasta `backend` com as seguintes variáveis:

   ```
   DATABASE_URL="mysql://user:password@host:port/database"
   JWT_SECRET="seu_segredo_muito_seguro"
   ```

   Certifique-se de substituir `user`, `password`, `host`, `port` e `database` com as suas credenciais do MySQL.
4. **Execute as migrações do Prisma:**

   ```bash
   npx prisma migrate dev --name init
   ```

   Isso criará as tabelas no seu banco de dados.
5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou yarn dev
   ```

   O servidor estará rodando em `http://localhost:3000`.

---

## 🔑 Endpoints da API

### 👤 Autenticação & Usuários

| Método | Endpoint                       | Descrição                       |
| ------- | ------------------------------ | --------------------------------- |
| POST    | `/api/users/register`        | Registrar um novo usuário        |
| POST    | `/api/users/login`           | Realizar login                    |
| POST    | `/api/users/forgot-password` | Recuperar senha (em construção) |
| GET     | `/api/users/profile`         | Ver perfil do usuário logado     |
| PUT     | `/api/users/profile`         | Editar perfil do usuário logado  |

### 📝 Artigos

| Método | Endpoint              | Descrição                                  |
| ------- | --------------------- | -------------------------------------------- |
| GET     | `/api/artigos`      | Listar todos os artigos públicos            |
| GET     | `/api/artigos/meus` | Listar artigos do usuário autenticado       |
| GET     | `/api/artigos/:id`  | Obter artigo por ID                          |
| POST    | `/api/artigos`      | Criar um novo artigo (autenticado)           |
| PUT     | `/api/artigos/:id`  | Editar artigo (autenticado e proprietário)  |
| DELETE  | `/api/artigos/:id`  | Deletar artigo (autenticado e proprietário) |

---

## 🧪 Testes de API com Postman

Aqui estão alguns exemplos de requisições que você pode fazer usando o Postman:

### **1. Cadastro de Usuário**

* **Endpoint:** `/api/users/register`
* **Método:** `POST`
* **URL:** `http://localhost:3000/api/users/register`
* **Headers:**
  * `Content-Type: application/json`
* **Body (raw - JSON):**
  ```json
  {
      "nome": "Teste1000",
      "email": "teste1000@email.com",
      "senha": "Senh@123"
  }
  ```

### **2. Login de Usuário**

* **Endpoint:** `/api/users/login`
* **Método:** `POST`
* **URL:** `http://localhost:3000/api/users/login`
* **Headers:**

  * `Content-Type: application/json`
* **Body (raw - JSON):**

  ```json
  {
      "email": "laura@example.com",
      "senha": "123456"
  }
  ```

  *Obs: Guarde o token JWT retornado para as próximas requisições autenticadas.*

### **3. Cadastro de Artigo**

* **Endpoint:** `/api/artigos`
* **Método:** `POST`
* **URL:** `http://localhost:3000/api/artigos`
* **Headers:**
  * `Content-Type: application/json`
  * `Authorization: Bearer SEU_TOKEN_JWT` (Substitua `SEU_TOKEN_JWT` pelo token obtido no login)
* **Body (raw - JSON):**
  ```json
  {
      "titulo": "Título do Artigo Exemplo",
      "conteudo": "Este é o conteúdo detalhado do meu artigo de exemplo."
  }
  ```

### **4. Buscar Artigo por ID**

* **Endpoint:** `/api/artigos/:id`
* **Método:** `GET`
* **URL:** `http://localhost:3000/api/artigos/ID_DO_ARTIGO` (Substitua `ID_DO_ARTIGO` pelo ID de um artigo existente)

### **5. Listar Todos os Artigos**

* **Endpoint:** `/api/artigos`
* **Método:** `GET`
* **URL:** `http://localhost:3000/api/artigos`

### 6. Listar Artigos do Usuário Logado

* **Endpoint:** `/api/artigos/meus`
* **Método:** `GET`
* **URL:** `http://localhost:3000/api/artigos/meus`
* **Descrição:** Retorna somente os artigos do usuário autenticado.
* **Headers:**
  * `Content-Type: application/json`
  * `Authorization: Bearer SEU_TOKEN_JWT`

### **7. Editar Artigo**

* **Endpoint:** `/api/artigos/:id`
* **Método:** `PUT`
* **URL:** `http://localhost:3000/api/artigos/ID_DO_ARTIGO` (Substitua `ID_DO_ARTIGO` pelo ID do artigo que deseja editar)
* **Headers:**
  * `Content-Type: application/json`
  * `Authorization: Bearer SEU_TOKEN_JWT`
* **Body (raw - JSON):**
  ```json
  {
      "titulo": "Título do Artigo - Editado",
      "conteudo": "Conteúdo do artigo - editado e atualizado."
  }
  ```

### **8. Deletar Artigo**

* **Endpoint:** `/api/artigos/:id`
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/api/artigos/ID_DO_ARTIGO` (Substitua `ID_DO_ARTIGO` pelo ID do artigo que deseja apagar)
* **Headers:**
  * `Authorization: Bearer SEU_TOKEN_JWT`

---



## 🗄️ Banco de Dados

O arquivo `dump/blog.sql` contém o dump do banco MySQL.

### 🔥 Para restaurar:

1. Abra o phpMyAdmin.
2. Crie um banco chamado `blog`.
3. Vá na aba **Importar**.
4. Selecione `dump/blog.sql` e clique em **Executar**.
