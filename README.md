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
> │   │   └── auth.middleware.ts         # Middleware para autenticação JWT
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
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
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
      "nome": "Teste",
      "email": "teste@example.com",
      "senha": "123456"
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

### **6. Editar Artigo**

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

### **7. Deletar Artigo**

* **Endpoint:** `/api/artigos/:id`
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/api/artigos/ID_DO_ARTIGO` (Substitua `ID_DO_ARTIGO` pelo ID do artigo que deseja apagar)
* **Headers:**
  * `Authorization: Bearer SEU_TOKEN_JWT`

---


## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
