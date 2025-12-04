# API Dog Agibank – Execução do Projeto

Este repositório contém testes automatizados de API utilizando Cypress e Mochawesome, consumindo os endpoints Dog API.
Aqui você encontra instruções simples e objetivas para instalar, executar os testes e gerar relatórios.


# GitHub Actions - Execução de Testes Cypress

Este projeto possui integração contínua configurada com GitHub Actions para rodar os testes automatizados de API usando Cypress e gerar relatórios com Mochawesome.

# Como funciona

1. Toda vez que houver PUSH ou PULL REQUEST na branch MAIN, o workflow do GitHub Actions é disparado automaticamente.
2. O workflow realiza:

   * Checkout do repositório
   * Instalação do Node.js (versão 18.16)
   * Instalação das dependências (`npm install`)
   * Instalação e verificação do Cypress
   * Execução dos testes Cypress com Mochawesome
   * Merge dos relatórios JSON em um único `report.json`
   * Geração do relatório HTML final
   * Upload do relatório como artifact no GitHub Actions

3. Como visualizar os relatórios

1. Acesse a aba ACTIONS do repositório no GitHub.
2. Clique no workflow correspondente à execução do Cypress.
3. Na execução mais recente, clique em Artifacts
4. Baixe o artifact chamado `cypress-report`.
5. Dentro da pasta baixada, abra `report.html` no navegador para visualizar o relatório completo.


# Executando localmente

Se quiser rodar os testes e gerar o relatório localmente:

# Pré-requisitos

Certifique-se de ter instalado:

* Node.js 18+
* npm 9+ (vem junto com o Node)
* Git (caso queira clonar o repositório)


# Clonar o repositório

git clone https://github.com/naziane/api-dog-agibank.git

cd api-dog-agibank


# Instalar dependências

Execute:

npm install


Isso irá instalar Cypress, Mochawesome e todas as dependências necessárias.


# Executar os testes

1. Modo headless (CI/local)

npx cypress run


2. Modo interativo (janela gráfica)

npx cypress open



# Relatórios Mochawesome

Após rodar os testes, os relatórios são gerados automaticamente em:

cypress/reports/mochawesome/


# Gerar relatório HTML final manualmente:

npm run report

O relatório final ficará na pasta:

mochawesome-report/report.html




# Endpoints testados

 `/breeds/list/all`
 `/breeds/image/random`
 `/breed/{breed}/images`



# Autora

Projeto desenvolvido por Naziane Alves Pinto.

