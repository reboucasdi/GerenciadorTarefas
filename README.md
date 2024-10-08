# Gerenciador de Tarefas
Um sistema para gerenciar tarefas, com backend em **.NET** e frontend em React.
O Gerenciador de Tarefas permite que os usuários adicionem, editem, visualizem e excluam tarefas. Ele utiliza um backend em **ASP.NET Core** com persistência de dados usando Entity Framework e um frontend em React para a interface de usuário.
- Node.js (versão 14+)
- .NET SDK (versão 8.0)
- MySQL ou SQL Server (para o banco de dados)

**Instalação**  
### Backend (.NET Core)
1. Clone o repositório: `git clone https://github.com/reboucasdi/GerenciadorTarefas.git`
2. Navegue até a pasta do backend: `cd GerenciadorTarefas/GerenciadorTarefas`
3. Instale as dependências: `dotnet restore`
4. Execute as migrações para o banco de dados: `dotnet ef database update`
5. Inicie o servidor: `dotnet run`

### Frontend (React)
1. Navegue até a pasta do frontend: `cd GerenciadorTarefas/frontgerenciadortarefas`
2. Instale as dependências: `npm install`
3. Inicie a aplicação: `npm start`

**Como usar o Projeto**
- Abra o navegador e vá para `http://localhost:{porta}` para acessar o frontend.
- Para acessar a API, use `http://localhost:{porta}/api/tarefas`.
  
**Observar a adequação da porta disponível em sua máquina, normalmente ao executar o "npm start" a automação abre o navegador e direciona o link de acesso.**

### Estrutura do projeto
```
├── GerenciadorTarefas/
│   ├── Controllers/         # Controladores do backend
│   ├── Models/              # Modelos de dados
│   ├── Data/                # Configuração do banco de dados
├── frontgerenciadortarefas/ # Código do frontend React

```

(**GerenciadorTarefas/**): Contém todo o projeto backend (ASP.NET Core) e frontend (React).

**Controllers/**: Contém os controladores responsáveis pela lógica da aplicação e pelos endpoints da API.

**Models/:** Define os modelos que representam as entidades de dados do projeto (no caso, "Tarefa").

**Data/:** Configura o contexto de banco de dados (**AppDbContext**) e define como as tabelas e dados serão geridos.

**Migrations/:** Contém os arquivos de migração gerados pelo **Entity Framework**, usados para criar e modificar o esquema do banco de dados.

**frontgerenciadortarefas/:** A aplicação frontend React, com os arquivos de componentes e configuração.

**Program.cs** : Arquivos principais de configuração da aplicação no ASP.NET Core.

### LÓGICA DE PROGRAMAÇÃO

![diagramaGRtarefcompleto](https://github.com/user-attachments/assets/e5c6cd12-1f7d-43ef-a6e8-b16e70826469)



