# Buscador de Usuários

## Um projeto React com TypeScript que consome a API JSONPlaceholder para buscar e exibir usuários.

## Funcionalidades

🔍 Busca de usuários por nome

📄 Listagem de todos os usuários ao carregar a página

🎯 Filtragem em tempo real

📱 Layout responsivo

⚡ Feedback visual durante o carregamento

🚨 Tratamento de erros

## 🛠 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

TypeScript

Tailwind CSS

Fetch API

React Icons (IoIosSearch)

## Como Executar o Projeto

Pré-requisitos
Node.js (v16 ou superior)

npm ou yarn

## Instalação

### 2 - Clone o repositório:

```bash
git clone https://github.com/RobertSouDev/UserList.git
```

### 2 - Acesse o diretório do projeto:

```bash
cd buscador-usuarios
```

### 3 - Instale as dependências:

```bash
npm install

# ou

yarn install
```

### 4 - Inicie o servidor de desenvolvimento:

```bash
npm run dev

# ou

yarn dev
```

### 5 - Acesse no navegador:

```bash
http://localhost:3000
```

## Estrutura do Projeto

```bash
src/
├── App.tsx # Componente principal
├── main.tsx # Ponto de entrada
├── components/
│ ├── SearchBar.tsx # Barra de busca
│ └── UserList.tsx # Card de usuário
├── types/
  └── User.ts # Tipos TypeScript

```

### Personalização

#### Para modificar a API utilizada, edite o arquivo App.tsx e altere a URL base:

#### typescript

const API_URL = "https://jsonplaceholder.typicode.com/users";

git init
git add README.md
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/RobertSouDev/UserList.git
git push -u origin main
