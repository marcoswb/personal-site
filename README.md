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

- [Firebase](https://firebase.google.com/) - O Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web;

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
|
├── src/
│   ├── components/
│   │   ├── Carrossel/
│   │   │   ├── index.js
│   │   │   └── style.css
|   |   |
│   │   ├── MainContent/
│   │   │   ├── index.js
│   │   │   └── style.css
|   |   |
│   │   └── NavBar/
│   │       ├── index.js
│   │       └── style.css
|   |
|   ├── database/
│   |   └── template.json
|   |
|   ├── images/
│   │   ├── email.png
│   │   ├── git.png
│   │   ├── github.png
│   │   ├── javascript.png
│   │   ├── linkedin.png
│   │   ├── linux.png
│   │   ├── perfil.png
│   │   ├── python.png
│   │   ├── react.png
│   │   ├── SQL.png
│   │   └── whatsapp.png
|   |
│   ├── pages/
│   │   ├── Blog/
│   │   │   ├── index.js
│   │   │   └── style.css
|   |   |
│   │   ├── Contacts/
│   │   │   ├── index.js
│   │   │   └── style.css
|   |   |
│   │   ├── Experience/
│   │   │   ├── index.js
│   │   │   └── style.css
|   |   |
│   │   ├── Formation/
│   │   │   ├── index.js
│   │   │   └── style.css
|   |   |
│   │   ├── Home/
│   │   │   ├── index.js
│   │   │   └── style.css
|   |   |
│   │   └── Projects/
│   │       ├── index.js
│   │       └── style.css
|   |
│   ├── services/
│   │   └── FirebaseService.js
|   |
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── .env
├── .gitignore
├── README.md
└── package.json
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

Com isso o projeto será criado com todas as dependências devidamente instaladas e linkadas.

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **public** - Diretório que contém o arquivo `index.html`, primeiro arquivo a ser carregado na aplicação;

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **components** - Diretório onde ficam os componentes da aplicação, como forma de padronização e boas práticas todo componente fica dentro de um diretório com seu nome;
  
    - **NavBar** - Diretório exemplo de um componente cujo nome é **NavBar**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório foi criado ao menos o arquivo `index.js` e o arquivo `style.css`;

      - **index.js** - Arquivo com toda a lógica do componente, tal como os componentes visuais a serem renderizados;

      - **style.css** - Arquivo com a estilização do componente em css;
      
  - **database** - Diretório que contém a estrutura básica do banco de dados;
  
  - **images** - Diretório utilizado para armazenar todas as imagens da aplicação;
  
  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Home** - Diretório exemplo de uma página cujo nome é **Home**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório foi criado ao menos o arquivo `index.js` e o arquivo `style.css`;
 
  - **services** - Diretório onde ficam os arquivos que se comunicam e manipulam dados do banco de dados;

    - **FirebaseService.js** - Arquivo principal que faz todas as consultas ao Firebase;

  - **App.css** - Arquivo responsável por ser um arquivo css 'global' para a aplicação;

  - **App.js** - Arquivo responsável pelas chamadas de rotas da aplicação;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas quaisquer configurações que precisem ser executadas na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;
  
  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados as rotas através da biblioteca 'react-router-dom';
  
- **.env** - Arquivo que armazena as variáveis de ambiente da aplicação`(você deve criar esse arquivo)`, dentre elas estão:
  - `REACT_APP_TITLE` -> armazena o texto que você quer que apareça no titulo da página;
  - `REACT_APP_FIREBASE_API_KEY` -> variável "apiKey" do firebase;
  - `REACT_APP_FIREBASE_AUTHDOMAIN` -> variável "authDomain" do firebase;
  - `REACT_APP_FIREBASE_DATABASEURL` -> variável "databaseURL" do firebase;
  - `REACT_APP_FIREBASE_PROJECTID` -> variável "projectId" do firebase;
  - `REACT_APP_FIREBASE_STORAGEBUCKET` -> variável "storageBucket" do firebase;
  - `REACT_APP_FIREBASE_MESSAGINGSENDERID` -> variável "messagingSenderId" do firebase;
  - `REACT_APP_FIREBASE_APPID` -> variável "appId" do firebase;
  - `REACT_APP_FIREBASE_MEASUREMENTID` -> variável "measurementId" do firebase;
  
- **package.json** - Todas as configurações do projeto ficam salvos nesse arquivo.

### Publicação

Para o armazenamento utilizei o [firebase](https://firebase.google.com/?hl=pt):

1. Basta clicar [aqui](https://firebase.google.com/?hl=pt) e clicar em "Ir para o Console";

2. Criar um novo projeto na plataforma;

3. Depois de criado é só adicionar o Firebase ao projeto, para isso selecione "adicionar Firebase a um projeto web" e quando for fornecido o SDK do Firebase, copie o objeto "firebaseConfig", que vai ter as mesmas variáveis que estão presentes no arquivo .env do projeto, e dessa forma você só coloca os valores corretos nas variáveis de ambiente.

4. E por último importar a estrutura padrão do banco de dados, presente no arquivo template.json dentro do RealTime Database do seu Firebase.

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
