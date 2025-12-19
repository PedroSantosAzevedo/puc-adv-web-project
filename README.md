# 🌿 Projeto Frontend React + Vite + TypeScript
Uma aplicação frontend para catalogo de plantas pessoais e acompanhamento

## ✨ Funcionalidades
⚡ Extremamente Rápido - Desenvolvimento e build otimizados com Vite

- 🎨 **React Moderno** - Construído com as funcionalidades mais recentes do React 18+
- 📱 **Design Responsivo** - Adapta-se perfeitamente a diferentes tamanhos de tela
- 🔄 **Roteamento Inteligente** - Navegação fluida entre telas com React Router

## 🏗️ Tecnologias
React 18+ - Biblioteca de UI

Vite - Ferramenta de build e servidor de desenvolvimento

TypeScript - Tipagem estática (opcional)

React Router - Roteamento no cliente

## 📦 Pré-requisitos
Node.js 18+ ou 20+

npm, yarn ou pnpm

# 🚀 Guia Passo a Passo
## Passo 1: Clone o Repositório
bash
### Clone o repositório
git clone <url-do-repositorio>

### Entre na pasta do projeto
cd <nome-da-pasta>
## Passo 2: Instale as Dependências
bash
### Usando npm
npm install

### OU usando yarn
yarn install

### OU usando pnpm
pnpm install

## Passo 3: Configure as Variáveis de Ambiente
bash
## Copie o arquivo de exemplo
cp .env.example .env.local

### Edite o arquivo .env.local com suas configurações
### Você pode usar um editor de texto como VSCode, Nano ou Vim
## Passo 4: Inicie o Servidor de Desenvolvimento
bash
### Usando npm
npm run dev

### OU usando yarn
yarn dev

### OU usando pnpm
pnpm dev
## Passo 5: Acesse a Aplicação
Abra seu navegador

Acesse: http://localhost:5173

Você verá a aplicação em execução

### Para visualizar a build de produção localmente
npm run preview

# 📁 Estrutura do Projeto
  
    ├── assets/           # Arquivos estáticos (imagens, fontes, etc.)
    ├── components/       # Componentes reutilizáveis
    │   ├── defaultButton/# Componente de botão utilizado ao longo de duas telas
    │   ├── plantCard/    # Componente de card reautilizavel para a apresentação de cada planta
    │   ├── textField/    # Componente de input de texto com titulo
    │   └── header/       # Header utilizado em todo o site, contendo logo, texto customizavel e botao de usuario
    ├── pages/            # Componentes de página
    │   ├── plantHome/    # Tela contendo uma breve explicacao da aplicação e seu futuro e um botão para a lista de plantas
    │   ├── pageNotFound/ # Tela de erro genérica reutilizável
    │   ├── plantEdit/    # Tela para edição da planta selecionada
    │   └── plantList/    # Tela com lista de plantas disponíveis
    ├── data/             # Tela que contém json para subistuição do que no futuro serão serviços
    ├── App.tsx           # Componente principal
    ├── index.css         # Arquivos de estilo gerais da aplicação
    └── main.tsx          # Ponto de entrada da aplicação

## 📦 Componente PlantCard 
O PlantCard é um componente React reutilizável que exibe um cartão interativo para representar plantas ou itens similares em uma interface. Este componente demonstra a utilização prática de hooks do React para gerenciamento de estado e interatividade, seguindo boas práticas de desenvolvimento com TypeScript.

## 🎯 Características Principais
✅ Componente Reutilizável - Pode ser utilizado múltiplas vezes com diferentes dados
✅ Tipagem Forte com TypeScript - Props bem definidas para melhor autocompletar e prevenção de erros
✅ Gerenciamento de Estado Local - Utiliza hooks do React para controle interno
✅ Interatividade Completa - Suporte a cliques com feedback visual
✅ Design Responsivo - Estrutura flexível para diferentes tamanhos de tela


## 📝 Componente TextFieldGroup 
📋 Descrição
O TextFieldGroup é um componente reutilizável para entrada de dados em formulários, projetado especificamente para capturar características de plantas (como nome, espécie, tipo de solo, etc.).

🎯 Características Principais
✅ Componente Controlado - Segue o padrão de componentes controlados do React

✅ Totalmente Tipado - Props definidas com TypeScript para segurança e autocomplete

✅ Flexível - Suporta múltiplos tipos de input (text, email, password, etc.)

✅ Reutilizável - Pode ser usado em qualquer formulário da aplicação

✅ Customizável - Placeholders e labels personalizáveis

## 🔘 Componente DefaultButton 
📋 Descrição
O DefaultButton é um componente que encapsula a funcionalidade básica de um botão em uma interface. Projetado com foco em simplicidade e consistência, este componente serve como bloco de construção fundamental para ações de usuário em toda a aplicação.

 🎯 Características Principais
✅ Simplicidade Intencional - Interface limpa com apenas props essenciais

✅ Totalmente Tipado - Segurança de tipo com TypeScript

✅ Callback Opcional - Flexibilidade para ações condicionais

✅ Consistência Visual - Classes CSS padronizadas em toda a aplicação

✅ Reutilização Máxima - Pode ser usado em qualquer contexto que necessite de um botão


## 🏷️ Componente MyHeader
📋 Descrição
O MyHeader é um componente  navegável que serve como cabeçalho principal da aplicação. Este componente demonstra integração avançada com React Router e lógica condicional de navegação, proporcionando uma experiência de usuário fluida e contextual. Ideal para aplicações que necessitam de navegação inteligente entre diferentes fluxos.

🎯 Características Principais
✅ Navegação Inteligente - Lógica condicional baseada na localização atual

✅ Integração com React Router - Utiliza hooks de navegação nativos

✅ Ações Contextuais - Botão de ação no header para funcionalidades globais

✅ Reutilizável em Toda App - Pode ser usado em qualquer página/routing

##🌿 Componente PlantCard - Cartão Interativo de Planta
📋 Descrição
O PlantCard é um componente reutilizável que exibe informações sobre plantas . Este componente implementa seleção toggle com feedback visual imediato, sendo ideal para listagens e galerias e seleção diverso itens.

🎯 Características Principais

✅ Feedback Visual Imediato - Mudança de classes CSS para indicar estado

✅ Callback de Ação - Executa função personalizada ao clicar, recebendo o ID da planta

✅ Tags Dinâmicas - Exibe múltiplas etiquetas/labels como badges informativos

✅ Totalmente Tipado - Props definidas com TypeScript para segurança e autocomplete

✅ Reutilizavel - Recebe parametros para configuração do componente


