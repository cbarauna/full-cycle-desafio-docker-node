# full-cycle-desafio-docker-node
Desafio do curso full cycle, com o uso de Docker, NodeJs, MySql e NGinx

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

## Serviços
- NodeJs:18
- nginx:1.25
- mysql:8.1
- Docker / Docker Compose

## Como utilizar:
Na raiz do projeto executar o comando 
```bash
docker compose up -d
```
Aguardar os serviços iniciarem e abrir o navegador no endereço
[](http://localhost:8080/)http://localhost:8080/


> [!IMPORTANT]  
> Cada vez que o serviço é iniciando ele executa o script que faz o insert na base. 
```bash
INSERT INTO dados(nome) value('Carlos Baraúna')
```
O ID está com auto incremento
