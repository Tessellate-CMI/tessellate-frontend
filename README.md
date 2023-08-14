<h1 align="center">Tessellate Frontend</h1>

<div align="center">

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

</div>

## Developing

1. Install [yarn](https://yarnpkg.com)
2. Clone the repository
```sh
git clone https://github.com/Tessellate-CMI/tessellate-frontend
```
3. Install dependencies
```sh
cd tessellate-frontend
yarn install
```
4. Start the server
```sh
yarn dev
```

Following `yarn` scripts are available:
- dev : Run dev server
- build : Build for production
- preview : Preview production
- check : Run svelte diagnostics
- check:watch : Run svelte diagnostics on watch
- lint : Lint code using `eslint`
- format : Format code using `prettier`
- commit : Commit staged files

_Note: Please use `yarn commit` instead of `git commit`_

_Note: Please use extensions recommended in `.vscode/extensions.json` if you are using VSCode_