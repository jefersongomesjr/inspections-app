# Inspeções App

## Visão Geral
Esta é uma aplicação Next.js desenvolvida para gerenciar inspeções e infrações. Ela oferece uma interface de usuário para visualizar inspeções e permite a criação e o gerenciamento de infrações associadas a essas inspeções.

## Funcionalidades
- Visualizar uma lista de inspeções.
- Criar novas infrações para inspeções específicas.
- Visualização detalhada de inspeções individuais.
- Simulação de API usando `json-server`.

## Tecnologias Utilizadas
- **Next.js**
- **React**
- **TypeScript**
- **CSS Modules**
- **json-server**

## Primeiros Passos

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- npm ou yarn

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/jefersongomesjr/inspections-app.git
    cd inspections-app
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Servidor de Desenvolvimento

1.  Inicie o servidor da API (usando `json-server`):
    ```bash
    npm run db:start
    # Para iniciar o banco de dados com o Json-server em http://localhost:3001
    ```
    Certifique-se de que `db.json` exista na raiz do projeto para que a API sirva os dados.

2.  Em um terminal separado, inicie o servidor de desenvolvimento Next.js:
    ```bash
    npm run dev
    ```
    Abra [http://localhost:3000] no seu navegador para ver a aplicação.


## Principais decisões técnicas
- **CSS Modules para Estilização**: Permite o encapsulamento de estilos em nível de componente, evitando conflitos de nomes e promovendo um CSS mais modular e fácil de manter.
- **`json-server` para Mock de API**: Utilizado para simular um backend RESTful de forma rápida e eficiente durante o desenvolvimento, permitindo que o frontend seja desenvolvido de forma independente antes da integração com uma API real.
- **Atomic Design para Estrutura de Componentes**: Adoção dos princípios do Atomic Design para organizar os componentes da UI em uma hierarquia clara (átomos, moléculas, organismos). Essa abordagem promove a escalabilidade, a reutilização de componentes e facilita a manutenção do código, garantindo consistência visual e funcional.


