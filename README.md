# spotify-app
[![Linkedin Badge](https://img.shields.io/badge/-alexandre-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alexandre-anicio/)](https://www.linkedin.com/in/alexandre-anicio/)

### `Descrição`
Esse aplicativo foi construido em uma arquitetura modular permitindo maior flexibilização e alta capacidade de reutilização de componentes dentro do monorepo. Sua estrutura é dividida em dois grandes módulos:
  - `Design System` (criado com web components, totalmente agnóstico e reutilizável) que mantém a consistência entre varios recursos isolados. 
  - `Applications` que engloba aplicações baseadas em uma arquitetura de Micro Front-Ends que consomem diversos recursos em comum. No caso desse projeto, foi criada apenas uma aplicação em React que se conecta intimamente com os componentes do design system.

Se o usuário desejar ver mais informações sobre determinada moeda é possível buscá-la pelo seu nome ou clicar na respectiva linha na tabela de ranking. O bitcoinExplorer também dispõe de um gráfico personalizável para cada ativo, que permite ao usuário visualizar informações sobre a performance do ativo em diferentes circunstâncias e intervalos de tempo.

### `Instalação`
Após o clone do repositório, deve-se instalar as dependências locais e remotas do projeto, deve-se executar o comando a baixo na PASTA RAIZ do projeto (é necessário ter o Node.js instalado):
```bash
npm install
```
E iniciar o aplicativo React em modo de desenvolvimento, tamém na pasta raiz ([http://localhost:8080](http://localhost:8080)):
```bash
npm start
```
Esse comando cria um link simbólico entra os pacotes do design system (ainda não publicados no NPM) e as dependencias da aplicação, permitindo que possamos utilizar esse componentes em forma de pacotes. Ele também faz o build dos componentes do Design System da aplicação, além de executar as configurações do webpack para servir a aplicação.

### `Testes (Jest + React Testing Library + Open WC Testing)`
Os testes da aplicação foram desenvolvidos em Jest e React Testing Library (RTL). A escolha por utilizar os dois em conjunto foi pautada principalmente pelo fato dos princípios de funcionamento do RTL serem semelhantes à maneira como o usuário encontra elementos na página. Desse modo consegue-se testar a aplicação de uma forma mais efetiva e coerente com as possíveis interações feitas pelo usuário.

Já o Open WC Testes foi usado para testar os componentes do Design System. Ele é um framework de testes focado em Web components que permite de maneira mais fácil, acessar o shadowRooot desses componentes e testá-los de forma mais prática e efetiva.

Para executar todos os testes do repositório, deve-se executar:
```bash
npm test
```
Para rodar apenas os testes do Design System:
```bash
npm run ds-test
```
Para rodar apenas os testes da aplicação:
```bash
npm run app-test
```

### `Comandos úteis para o desenvolvimento`

Para limpar as pastas /node_modules e /dist dos pacotes:
```bash
npm run clean
```
Para criar um link simbólico entre os pacotes do design system e as dependêcias da aplicação:
```bash
npm run bootstrap
```
Para buildar em tempo real os componentes do design system (permite que você consiga ver as mudanças que você faça em algum pacote do design system em tempo real):
```bash
npm run ds-build-watch
```
Vale lembrar que mudanças apenas na aplicação, que não envolvem os componentes do design system já são refletidas automaticamente pela configuração do webpack desse projeto.

Para rodar o eslint nos arquivos do projeto:
```bash
npm run lint-app
```
