# Site Pessoal

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Site Pessoal](#site-pessoal)
  - [Tabela de Conteúdo](#tabela-de-conteúdo)
  - [Sobre o Projeto](#sobre-o-projeto)
    - [Feito Com](#feito-com)
  - [Começando](#começando)
    - [Estrutura de Arquivos](#estrutura-de-arquivos)
    - [Instalação](#instalação)
    - [Edição](#edição)
    - [Publicação](#publicação)
  - [Contribuição](#contribuição)
  - [Licença](#licença)
  - [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um site pessoal que possa ser utilizado como template no momento de criação de projetos utilizando
React, para pessoas que desejam começar seu próprio site pessoal como portifólio.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React](https://github.com/facebook/react) - O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web;

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, siga os passos abaixo.


### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
personal-site
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Carrossel/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── MainContent/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   └── NavBar/
│   │       ├── index.js
│   │       └── style.css
│   ├── pages/
│   │   ├── Blog/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Contacts/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Experience/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Formation/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Home/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   └── Projects/
│   │       ├── index.js
│   │       └── style.css
│   ├── resource/
│   │   ├── images/
│   │   │   ├── AWK.png
│   │   │   ├── SQL.png
│   │   │   ├── email.png
│   │   │   ├── git.png
│   │   │   ├── github.png
│   │   │   ├── java.png
│   │   │   ├── javascript.png
│   │   │   ├── linkedin.png
│   │   │   ├── perl.png
│   │   │   ├── python.png
│   │   │   ├── react.png
│   │   │   └── whatsapp.png
│   │   ├── blog-posts.json
│   │   └── projects.json
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── .env
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para começar a utilizar esse template o processo é bem simples, basta copiar o projeto utilizando o comando:

```sh
git clone https://github.com/marcoswb/personal-site.git
```

2. Utilizar o comando a seguir para entrar dentro do projeto:
  
```sh
cd personal-site
```

3. Utilizar o comando a seguir para instalar as dependências:
  
```sh
npm install
```

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas.

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **public** - Diretório que contém o arquivo `index.html`, primeiro arquivo a ser carregado na aplicação;

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **components** - Diretório onde ficam os componentes da aplicação, como forma de padronização e boas práticas todo componente fica dentro de um diretório com seu nome;
  
    - **NavBar** - Diretório exemplo de um componente cujo nome é **NavBar**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório foi criado ao menos o arquivo `index.js` e o arquivo `style.css`;

      - **index.js** - Arquivo com toda a lógica do componente, tal como os componentes visuais a serem renderizados;

      - **style.css** - Arquivo com a estilização do componente em css;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Home** - Diretório exemplo de uma página cujo nome é **Home**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório foi criado ao menos o arquivo `index.js` e o arquivo `style.css`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

      - **style.css** - Arquivo com a estilização da página em css;

  - **resource** - Diretório para armazenar imagens e arquivos em geral que possam ser utilizados na aplicação;
    
    - **images** - Diretório utilizado para armazenar todas as imagens da aplicação;

      - **blog-posts.json** - Arquivo onde você pode colocar todos os posts que fez no Medium por exemplo, e eles serão listados na página 'Blog', pode também adicionar 'tags' que servirão para pesquisa dentro dessa mesma página;
  
      - **projects.json** - Arquivo onde você pode colocar todos os projetos que fez e estão hospedados no Github por exemplo, e eles serão listados na página 'Projetos', pode também adicionar 'techs' que servirão para pesquisa dentro dessa mesma página;

  - **App.css** - Arquivo responsável por ser um arquivo css 'global' para a aplicação;

  - **App.js** - Arquivo responsável pelas chamadas de rotas da aplicação;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas quaisquer configurações que precisem ser executadas na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;
  
  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados as rotas através da biblioteca 'react-router-dom';
  - 
- **.env** - Arquivo que armazena as variáveis de ambiente da aplicação`(você deve criar esse arquivo)`, dentre elas estão:
  - `REACT_APP_NAME` -> armazena seu primeiro nome;
  - `REACT_APP_FULL_NAME` -> armazena seu nome completo;
  - `REACT_APP_OCCUPATION` -> armazena seu trabalho atual, que irá aparecer na Home Page;
  - `REACT_APP_NUMBER_PHONE` -> armazena seu numero de Telefone, utilizado para a integração da aplicação com whatsapp;
  - `REACT_APP_EMAIL` -> armazena seu email, utilizado para a integração da aplicação com o email
  - `REACT_APP_LINKEDIN_LINK` -> armazena seu link de perfil do LinkedIn;
  - `REACT_APP_GITHUB_LINK` -> armazena seu link de perfil do Github;
  - `REACT_APP_ABOUT` -> armazena uma breve descrição sobre você, que irá aparecer na Home Page
  
- **package.json** - Todas as configurações do projeto ficam salvos nesse arquivo.

### Publicação

Para fazer o deploy utilizei a [versel](https://vercel.com/):

1. Clique aqui [aqui](https://vercel.com/login) para criar uma conta ou fazer login caso já possua uma conta;

2. Com a conta criada basta criar um novo projeto na versel e vinculá-lo ao seu repositório do Github;

3. E pronto, só esperar o deploy na versel e sua aplicação já estará disponível na internet para qualquer pessoa acessar;

OBS.: Caso você possua um Domínio próprio e queira utilizar ele na sua aplicação, recomendo o vídeo do [Felipe Deschamps](https://youtu.be/IyRUn0GocEc), nele você aprende como configurar tudo isso na versel;

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add -A`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Marcos Warmling Berti - **marcos_wb@outlook.com**
