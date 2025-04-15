

# 🛒 Carrinho de Compras - Projeto com React

![Demonstração do Projeto](https://img.shields.io/badge/React-v18.3.1-blue) ![License](https://img.shields.io/badge/license-MIT-green)

> Projeto guiado com o objetivo de construir uma aplicação de e-commerce utilizando **React.js**, com foco em gerenciamento de estado global, consumo de API, boas práticas de componentes e experiência do usuário.

🎥 **Vídeo Demonstrativo**: [Assista aqui](https://youtu.be/_DlF9PnYHsk)

---

## 📌 Sobre o Projeto

Este projeto consiste em uma aplicação web de carrinho de compras, onde o usuário pode buscar por produtos, adicionar ao carrinho, visualizar detalhes como preço e descrição, e remover produtos quando quiser.

Inicialmente, a aplicação fazia requisições à **API pública do Mercado Livre** para buscar produtos em tempo real. No entanto, devido a **mudanças recentes nas políticas de uso da API**, foi necessário substituir o serviço de backend por dados mockados/padrão, garantindo o funcionamento da aplicação sem depender de autorização da API.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React.js** - Biblioteca principal
- 🎯 **Context API** - Gerenciamento de estado global
- 💅 **CSS Modules** - Estilização por componente
- 🔎 **React Icons** - Ícones interativos
- 📦 **React Scripts** - Scripts de build e execução
- 🧪 **Jest/Testing Library** (dependências pré-configuradas)

---

## ✨ Funcionalidades

- 🔍 Busca de produtos por nome
- 🖼️ Exibição de imagem, nome, descrição e preço
- ➕ Adição de itens ao carrinho
- ➖ Remoção de itens do carrinho
- 💰 Formatação de preço em real (R$)
- 🌀 Feedback visual de carregamento (`Loading`)
- 📱 Layout responsivo (Mobile-friendly)

---

## 🧠 Conceitos abordados

- Componentização
- Comunicação entre componentes via `props` e `context`
- Hooks (`useState`, `useEffect`, `useContext`)
- Manipulação de eventos (`onClick`, `onSubmit`)
- Modularização com pastas por responsabilidade
- Boas práticas de legibilidade e semântica no JSX

---

## 🛠️ Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/DanielDimas2002/Carrinho-de-Compras.git
```

2. **Instale as dependências:**

```bash
cd Carrinho-de-Compras
npm install
```

3. **Execute a aplicação:**

```bash
npm start
```

A aplicação abrirá automaticamente no navegador em `http://localhost:3000`.

---

## 📁 Estrutura do Projeto

```
Carrinho-de-Compras/
├── public/
├── src/
│   ├── componentes/
│   │   ├── Header/
│   │   ├── Produtos/
│   │   ├── CardProduto/
│   │   ├── Cart/
│   │   ├── CartItem/
│   │   ├── SearchBar/
│   │   └── Loading/
│   ├── context/
│   ├── api/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🔗 Link do Projeto

🔧 GitHub: [https://github.com/DanielDimas2002/Carrinho-de-Compras](https://github.com/DanielDimas2002/Carrinho-de-Compras)

📹 Vídeo: [YouTube - Demonstração do Carrinho de Compras](https://youtu.be/_DlF9PnYHsk)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.  
Sinta-se livre para estudar, testar, modificar e compartilhar.

