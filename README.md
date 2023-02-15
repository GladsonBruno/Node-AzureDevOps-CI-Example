# Visão Geral
Projeto de exemplo criado apenas para fins de exemplificação de automação DevOps com Azure DevOps.

Estará contemplado:

* Scan SonarCloud - OK
* Teste unitário - OK
* Code Coverage - OK
* Build de container - OK
* Teste de container - OK
* Pipeline templatizada - OK

Link do projeto template utilizado referenciado neste projeto: [azure-template-pipelines](https://github.com/GladsonBruno/azure-template-pipelines)

## Execução Local
Execute o seguinte comando para execução local:
```sh
npm install
npm run start:dev
```

## Execução em produção
Execute o seguinte comando para execução em produção:
```sh
npm install
npm run start:prod
```

## Execução de teste unitário
Execute o seguinte comando:
```sh
npm run test
```

## Execução de teste unitário com report de code coverage
Execute o seguinte comando:
```sh
npm run test:sonar
```
