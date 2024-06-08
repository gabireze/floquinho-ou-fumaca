# Floquinho ou Fumaça?

Explore o mundo dos livros interativos com nosso flipbook dinâmico e envolvente.

## Índice

- [Floquinho ou Fumaça?](#floquinho-ou-fumaça)
  - [Índice](#índice)
  - [Descrição](#descrição)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Scripts Disponíveis](#scripts-disponíveis)
    - [`npm run dev`](#npm-run-dev)
    - [`npm run build`](#npm-run-build)
    - [`npm run preview`](#npm-run-preview)
    - [`npm run lint`](#npm-run-lint)
    - [`npm run format`](#npm-run-format)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Tecnologias Usadas](#tecnologias-usadas)
  - [Contribuição](#contribuição)
  - [Licença](#licença)
  - [Sobre o Projeto](#sobre-o-projeto)

## Descrição

Floquinho ou Fumaça? é um aplicativo interativo que permite aos usuários explorar livros de uma maneira dinâmica. Utiliza um componente flipbook para simular a experiência de folhear um livro real.

## Instalação

Para instalar e executar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/floquinho-ou-fumaca.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd floquinho-ou-fumaca
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

Para iniciar o projeto em modo de desenvolvimento, execute:

```bash
npm run dev
```

Abra o navegador e acesse a URL fornecida pelo Vite para ver o projeto.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Inicia o aplicativo em modo de desenvolvimento.<br>
Abra o navegador e acesse a URL fornecida pelo Vite para ver o projeto.

### `npm run build`

Compila o aplicativo para produção na pasta `dist`.<br>
Empacota corretamente o Vue no modo de produção e otimiza a construção para obter o melhor desempenho.

### `npm run preview`

Pré-visualiza a versão de produção gerada pelo `npm run build`.

### `npm run lint`

Verifica o código em busca de erros de linting e problemas de formatação.

### `npm run format`

Formata o código usando Prettier.

## Estrutura do Projeto

```plaintext
floquinho-ou-fumaca/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── ActionBar.vue
│   │   ├── FlipbookComponent.vue
│   │   └── Loader.vue
│   ├── App.vue
│   ├── main.js
│   └── styles.css
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Tecnologias Usadas

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Font Awesome](https://fontawesome.com/)
- [Flipbook Vue](https://www.npmjs.com/package/flipbook-vue)

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar problemas, por favor, abra uma issue ou envie um pull request.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um trabalho acadêmico, focando exclusivamente na implementação da interface do site. As ilustrações e a narrativa foram criadas por colaboradores especializados nessas áreas. Para mais informações ou esclarecimentos adicionais, por favor, entre em contato conosco.
