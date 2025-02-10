# API de Notificações de Preço

🚀 **API para cadastrar e gerenciar alertas de preço de produtos ou criptomoedas.**

---

## **Descrição**

Esta API permite que os usuários cadastrem alertas de preço para produtos ou criptomoedas. Quando o preço atinge o valor desejado, o usuário é notificado por e-mail.

---

## **Funcionalidades**

- Cadastro de usuários.
- Cadastro de alertas de preço.
- Verificação periódica de preços.
- Notificação por e-mail quando o preço é atingido.

---

## **Tecnologias Utilizadas**

- **Node.js**
- **Express**
- **Sequelize**
- **MySQL**
- **Axios** (para buscar preços de criptomoedas)
- **Nodemailer** (para enviar e-mails)
- **Node-cron** (para agendar tarefas periódicas)

---

## **Como Usar**

### **Pré-requisitos**

- Node.js instalado.
- MySQL instalado e configurado.
- Conta no Gmail para enviar e-mails (ou outro serviço de e-mail).

### **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-notificacoes-preco.git

2. Instale as dependências:
    ```bash
    npm install

3. Configure o arquivo **.env:**
    ```bash
DB_NAME=preco_notificacao
DB_USER=root
DB_PASSWORD=sua_senha
DB_HOST=localhost
PORT=5001
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha

4. Inicie o servidor:
    ```bash
    node src/server.js
    

---

## **Rotas da API**

- POST /api/users - Cadastrar um usuário.
- GET /api/users/:id - Buscar um usuário e seus alertas.
- POST /api/alerts - Cadastrar um alerta.
- GET /api/alerts/user/:userId - Buscar alertas de um usuário.

---
    
## **Estrutura do Projeto**
 
api-notificacoes-preco/
│
├── src/
│   ├── config/           # Configurações do banco de dados
│   ├── controllers/      # Lógica das rotas
│   ├── models/           # Modelos do banco de dados
│   ├── routes/           # Definição das rotas
│   ├── services/         # Lógica de negócio (ex: buscar preços)
│   ├── utils/            # Funções úteis (ex: enviar email)
│   ├── app.js            # Configuração do Express
│   └── server.js         # Iniciar o servidor
│
├── .env                  # Variáveis de ambiente
├── .gitignore            # Ignorar node_modules e .env
├── README.md             # Documentação do projeto
└── package.json          # Dependências do projeto

---

## **Contribuição**

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.

2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).

3. Commit suas mudanças (git commit -m 'Adicionando nova feature').

4. Push para a branch (git push origin feature/nova-feature).

5. Abra um Pull Request.

---

## **Licença**
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## **Autor**

Arthur Silva
https://github.com/Aurios-Arthur


---

