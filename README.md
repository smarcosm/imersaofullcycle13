# imersaofullcycle13
Projeto realizado na semana Full Stack & Full Cycle

# Simulação de Transações da Bolsa de Valores

Este projeto consiste em uma aplicação de simulação de transações da bolsa de valores, onde pode-se simular a compra e venda de ações e acompanhar o desempenho de seus investimentos.

## Tecnologias Utilizadas

- Frontend:
  - Next.js

- Backend:
  - NestJS
  - Golang (Microserviço principal)

- Serviço de Mensageria:
  - Kafka

- Banco de Dados:
  - Prisma
  - MongoDB

- Gerenciamento de Contêineres:
  - Docker

## Configuração e Execução

Certifique-se de ter o Docker instalado em sua máquina antes de executar os comandos abaixo.

1. Clone este repositório em sua máquina local.
2. Navegue até a pasta `go`.
3.  Execute o comando `docker-compose up -d` para construir e iniciar o contêiner do microserviço principal em Golang.
4. Execute o comando `go run cmd/trade/main.go` para iniciar o microserviço principal em Golang.
5. Navegue até a pasta `nestjs`.
6. Execute o comando `docker-compose up -d` para construir e iniciar os contêineres do backend e o serviço MongoDB.
7 Após a inicialização bem-sucedida, acesse o container do backend com o comando `docker-compose exec app bash`.
8. Dentro do container, execute o comando `npm run start:dev` para iniciar o servidor backend.

9. Navegue até a pasta `nextjs`.
10. Execute o comando `docker-compose up -d` para construir e iniciar o contêiner do frontend.
11.  Após a inicialização bem-sucedida, acesse o container do  com o frontend comando `docker-compose exec app bash`.
12.  Dentro do container, execute o comando `npm run dev` para iniciar o servidor frontend.

Agora, o frontend estará em execução e poderá ser acessado em `http://localhost:3001` para interagir com a aplicação.

## Povoamento do Banco de Dados e Integração com Kafka

Para povoar o banco de dados com simulações de preços de ativos e realizar a integração com o Kafka, siga as etapas abaixo:

1. No container do backend (NestJS), execute o comando `npm run command simulate-assets-price` para simular os preços dos ativos e transações de compra e venda, bem como as negociações abertas, pendentes e fechadas. Os dados serão enviados ao Kafka.
2. O serviço em Golang consome os dados do Kafka, processa-os e envia as respostas de volta ao Kafka.

## Estrutura do Projeto

A pasta `go` contém o código-fonte do microserviço principal desenvolvido em Golang. A pasta `nestjs` contém o código-fonte do backend desenvolvido com NestJS, incluindo a integração com o Kafka. A pasta `nextjs` contém o código-fonte do frontend desenvolvido com Next.js.

## Configuração Adicional

Certifique-se de atualizar as variáveis de ambiente necessárias antes de executar a aplicação. Verifique os arquivos de configuração em cada uma das pastas (`go`, `nestjs`, `next
