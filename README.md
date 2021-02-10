# Poc de Estudos - Angular no Gitpod. - [![Build Status][travis-img]][travis-url]

<br>

[![Open in Gitpod][open-gitpod-img]][open-gitpod-url]

<br>

![GitHub package.json version][version-img]
![GitHub top language][language-img]
[![code style: prettier][prettier-style-img]][prettier-style-url]
[![GitHub license][license-img]][license-url]
![GitHub last commit][commit-img]

<br>

> Aplicação em Angular para estudos.<br>
> GitHub Pages - [Aplicação](https://martins86.github.io/poc-estudos-angular-gitpod/inicio)

<br>

# Instalando Pacotes NPM

Instalando todos os pacotes de package.json :<br>
`npm install`

Prettier - Code Quality - [Prettier](https://prettier.io/) :<br>
Pacote: `npm install prettier --save-dev --save-exact` <br>
Otimiza: `npx prettier --write --ignore-unknown .` <br>
Checa/Valida: `npx prettier --check .` <br>

Husky - CI - [Husky](https://typicode.github.io/husky/#/) :<br>
Pacote: `npm install husky@next --save-dev` <br>
Git Hooks: `husky install` <br>
Pre Commit: `husky add .husky/pre-commit "npm run pre-commit"` <br>

Lint Staged - CI - [lint-staged](https://github.com/okonet/lint-staged#readme) :<br>
Pacote: `npm install lint-staged --save-dev` <br>
Config: `npx mrm lint-staged` <br>


<br>

# Criando um novo componente

Modulo com rotas - (alterar pages/home por pasta/nome do novo modulo) :<br>
`ng generate module pages/home --routing`

Componente - (alterar pages/home por folder/name do novo componente) :<br>
`ng generate component pages/home`

<br>

# Subindo o servidor (Local)

Execute o comando `ng serve -o` (Sobe o servidor e abre uma janela ou aba do navegador).

<br>

# Rodando os testes unitários

Execute o comando `ng test` rodando com [Karma](https://karma-runner.github.io).

<br>

# Rodando os testes end-to-end

Execute o comando `ng e2e` rodando com [Protractor](http://www.protractortest.org/).

<br>

# Versões

<br>

![npm][npm-img] ![node-current][node-current-img]

<br>

# Dependências em desenvolvimento

| Package    | NPMJS                                      | Shields                                                                         |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| Jasmine    | https://www.npmjs.com/package/jasmine-core | ![GitHub package.json dependency version (dev dep on branch)][jasmine-core-img] |
| Karma      | https://www.npmjs.com/package/karmal       | ![GitHub package.json dependency version (dev dep on branch)][karma-img]        |
| Protractor | https://www.npmjs.com/package/protractor   | ![GitHub package.json dependency version (dev dep on branch)][protractor-img]   |
| Husky      | https://www.npmjs.com/package/husky        | ![GitHub package.json dependency version (dev dep on branch)][husky-img]        |
| Lint Staged      | https://www.npmjs.com/package/lint-staged        | ![GitHub package.json dependency version (dev dep on branch)][lint-staged-img]        |
| Prettier   | https://www.npmjs.com/package/prettier     | ![GitHub package.json dependency version (dev dep on branch)][prettier-img]     |



<!-- Markdown link & images -->

[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-estudos-angular-gitpod
[version-img]: https://img.shields.io/github/package-json/v/martins86/poc-estudos-angular-gitpod
[language-img]: https://img.shields.io/github/languages/top/martins86/poc-estudos-angular-gitpod
[prettier-style-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-style-url]: https://github.com/prettier/prettier
[license-img]: https://img.shields.io/github/license/martins86/poc-estudos-angular-gitpod
[license-url]: https://github.com/martins86/poc-estudos-angular-gitpod/blob/main/LICENSE
[travis-img]: https://travis-ci.com/martins86/poc-estudos-angular-gitpod.svg?branch=master
[travis-url]: https://travis-ci.com/martins86/poc-estudos-angular-gitpod
[commit-img]: https://img.shields.io/github/last-commit/martins86/poc-estudos-angular-gitpod
[npm-img]: https://img.shields.io/npm/v/npm
[node-current-img]: https://img.shields.io/node/v/latest-version
[jasmine-core-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular-gitpod/dev/jasmine-core
[karma-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular-gitpod/dev/karma
[protractor-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular-gitpod/dev/protractor
[husky-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular-gitpod/dev/husky
[lint-staged-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular-gitpod/dev/lint-staged
[prettier-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular-gitpod/dev/prettier
