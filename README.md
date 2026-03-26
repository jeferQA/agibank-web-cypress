# Agibank Web Cypress

Teste técnico QA - Automação de testes web com Cypress

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Comandos Úteis](#comandos-úteis)
- [Contribuindo](#contribuindo)

## 🎯 Sobre o Projeto

Este projeto contém testes automatizados para a aplicação web do Agibank utilizando o framework Cypress. Os testes cobrem funcionalidades críticas da plataforma, garantindo qualidade e confiabilidade.

**URL da Aplicação:** https://blog.agibank.com.br

## 📦 Pré-requisitos

Antes de começar, certifique-se de que você possui os seguintes programas instalados em seu sistema:

### Windows, Linux e macOS

1. **Node.js** (versão 14.x ou superior)
   - Download: https://nodejs.org/
   - Para verificar se está instalado, execute:
     ```bash
     node --version
     ```

2. **npm** (geralmente vem com Node.js)
   - Para verificar a versão instalada, execute:
     ```bash
     npm --version
     ```

3. **Git** (opcional, mas recomendado)
   - Download: https://git-scm.com/

## 🚀 Instalação

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/jeferQA/agibank-web-cypress.git
cd agibank-web-cypress
```

### Passo 2: Instalar Dependências

Execute o comando abaixo em seu terminal para instalar todas as dependências do projeto:

#### Windows (PowerShell ou CMD):
```powershell
npm install
```

#### Linux e macOS (Terminal):
```bash
npm install
```

Este comando instalará o Cypress e todas as dependências necessárias definidas no `package.json`.

### Passo 3: Verificar Instalação

Para verificar se o Cypress foi instalado corretamente, execute:

#### Windows:
```powershell
npx cypress --version
```

#### Linux e macOS:
```bash
npx cypress --version
```

## 🧪 Executando os Testes

### Opção 1: Modo Headless (Sem Interface Gráfica)

Executa os testes em modo headless:

#### Windows:
```powershell
npm test
```

#### Linux e macOS:
```bash
npm test
```

Ou para especificar um arquivo de teste específico:

#### Windows:
```powershell
npx cypress run --spec "cypress/e2e/searchTests.cy.js"
```

#### Linux e macOS:
```bash
npx cypress run --spec "cypress/e2e/searchTests.cy.js"
```

### Opção 2: Modo Interativo (Cypress Test Runner)

Abre a interface gráfica do Cypress onde você pode executar testes, visualizar em tempo real e debugar:

#### Windows:
```powershell
npx cypress open
```

#### Linux e macOS:
```bash
npx cypress open
```

1. A janela do Cypress Test Runner será aberta
2. Selecione a opção **"E2E Testing"** 
3. Escolha seu navegador preferido (Chrome, Firefox, Edge, etc.)
4. Clique no arquivo de teste desejado para executar

### Opção 3: Executar Todos os Testes

#### Windows:
```powershell
npx cypress run
```

#### Linux e macOS:
```bash
npx cypress run
```

### Opção 4: Executar os testes pelo Github Actions
No repositório do github, acessar a página "Actions" e mandar executar o workflow.

## 📁 Estrutura do Projeto

```
agibank-web-cypress/
├── cypress/
│   ├── e2e/                    # Testes E2E
│   │   └── searchTests.cy.js   # Testes de busca
│   ├── fixtures/               # Dados de teste
│   │   └── searchData.json     # Dados para testes de busca
│   └── support/                # Configurações e comandos customizados
│       ├── e2e.js              # Arquivo de suporte E2E
│       └── commands/
│           └── search-commands.js  # Comandos customizados de busca
├── cypress.config.js           # Configuração principal do Cypress
├── package.json               # Dependências do projeto
└── README.md                  # Este arquivo
```

### Detalhes dos Arquivos Principais

- **cypress.config.js**: Configuração do Cypress com baseUrl, viewport, retentativas e outras opções
- **package.json**: Define dependências e scripts do projeto
- **cypress/e2e/searchTests.cy.js**: Contém os casos de teste
- **cypress/fixtures/searchData.json**: Dados usados nos testes
- **cypress/support/commands/search-commands.js**: Comandos customizados reutilizáveis

## 📝 Notas Importantes

1. **Requisito de Conexão**: Os testes requerem conexão com a internet, pois acessam https://blog.agibank.com.br
2. **Retentativas**: Os testes foram configurados com retentativas (2 tentativas em modo sem interface e 2 em modo interativo)
3. **Viewport**: A viewport padrão é de 1280x720 pixels
4. **Tratamento de exceções**: no arquvo cypress/support/e2e.js foram criadas algumas tratativas para alguns erros da aplicação, esse erros foram ignorados para criação desses testes e2e. É possível notar que quando disparados (astra is not defined / Cannot read properties of undefined (reading 'publicPath') / jetpackCarouselStrings is not defined ) existem falhas de carregamento na página e por consequência pode ser identificado na execução da automação.

## 👤 Autor

**Jeferson Indejejczak**

- GitHub: [@jeferQA](https://github.com/jeferQA)

---


