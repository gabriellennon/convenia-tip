# convenia-tip

SPA responsivo para divisão de gorjeta em Vue.js. 
Fluxo da aplicação: O usuário insere o total da conta, o quanto quer dar de gorjeta e quantas pessoas vão dividir a conta. Após isso será gerado o total da conta que pode ser em USD(Dólar) ou EUR(Euro) a depender da escolha do usuário. Como adicional ao final será exibido a conversão para BRL(R$).

## Dependências

- [Vue.js](https://vuejs.org/).
- [PrimeVue](https://primevue.org/)
- [Typescript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [Vue Apollo](https://apollo.vuejs.org/)
- [Sass](https://sass-lang.com/)


## Instalação e utilização

-> WEB
```sh
# clone o projeto
git clone https://github.com/gabriellennon/ignite-timer.git

# instale as dependências
yarn install ou npm install

# Rode a aplicação
npm run dev
```

-> API GraphQL de Cotação Monetária
```sh
# clone o projeto
git clone https://gitlab.com/convenia/assessments/currency-conversion

# instale as dependências
# -> via docker
docker build -t <image-name> .
ou
# via node.js 16
npm install
yarn install



# Rode a aplicação
docker run -p <port>:8080 <image-name>
ou
yarn serve <port>
```

OBS: Para mais informações sobre a api, siga a documentação sugerida
- [Documentação](https://gitlab.com/convenia/assessments/currency-conversion)
