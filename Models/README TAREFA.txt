Tarefa.cs - Descrição
O arquivo Tarefa.cs representa o modelo de dados da entidade Tarefa.
Essa classe define a estrutura dos dados que serão armazenados e
manipulados pela aplicação, mapeando diretamente para a tabela Tarefas
no banco de dados através do Entity Framework.

Funcionalidade:
Cada propriedade da classe Tarefa corresponde a uma coluna da tabela Tarefas.
Propriedades principais:
Id: Identificador único da tarefa (chave primária).
Title: O título ou nome da tarefa.
Description: Uma descrição mais detalhada da tarefa.
Completed: Um booleano que indica se a tarefa foi concluída ou não.
CreatedAt: Data e hora em que a tarefa foi criada.

Exemplo:
Se você criar uma nova tarefa na aplicação, 
ela será salva no banco de dados com todas essas
propriedades associadas, como o título e a descrição, e com um Id gerado automaticamente.