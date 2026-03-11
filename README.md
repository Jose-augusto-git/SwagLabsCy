# SwagLabsCy - Automação de Testes com Cypress

Este projeto contém a automação de testes E2E (End-to-End) do site Swag Labs (Saucedemo) utilizando o framework **Cypress** com **TypeScript** e o padrão de projeto **Page Object Model (POM)**.

## 🚀 Descrição

O foco principal deste repositório é testar os fluxos de autenticação (Login) do site Swag Labs, garantindo o correto funcionamento tanto em cenários de sucesso quanto em cenários de falha.

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** - Framework de automação de testes E2E.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript que adiciona tipagem estática ao projeto.
- **Node.js** - Ambiente de execução JavaScript.

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/) (para clonar o repositório)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/SEU-USUARIO/SwagLabsCy.git
```

2. Acesse a pasta do projeto:
```bash
cd SwagLabsCy
```

3. Instale as dependências:
```bash
npm install
```

## ▶️ Como Executar os Testes

Para abrir a interface gráfica do Cypress e rodar os testes interativamente:
```bash
npx cypress open
```

Para rodar os testes em modo *headless* (direto pelo terminal, ideal para CI/CD):
```bash
npx cypress run
```

## 📁 Estrutura do Projeto

A arquitetura do projeto foi estruturada utilizando o padrão **Page Object**:

```
cypress/
  ├── e2e/
  │   └── teste-login.cy.ts      # Arquivo principal contendo as suítes de testes de Login
  ├── page/
  │   ├── loginPage.ts           # Mapeamento de elementos e métodos da página de login
  │   └── url-login.ts           # Arquivo contendo a URL base da aplicação
cypress.config.ts                # Arquivo de configuração do Cypress
package.json                     # Arquivo de dependências e scripts do Node.js
```

## 🧪 Cenários de Teste Cobertos

Os seguintes cenários de teste foram validados de acordo com o arquivo `teste-login.cy.ts`:

**CT01** - Informar usuário e senha válidos (Login com Sucesso)  
**CT02** - Informar usuário inválido e senha válida  
**CT03** - Informar usuário válido e senha inválida  
**CT04** - Deixar os campos de usuário e senha em branco  
**CT05** - Informar usuário válido e não informar a senha  
**CT06** - Não informar o usuário e informar a senha correta  

## ✒️ Autor

![10 03 2026_17 30 33_REC](https://github.com/user-attachments/assets/d348a0d0-970d-494c-8692-c84c51b94789)

Projeto criado e mantido como demonstração de automação com Cypress.
