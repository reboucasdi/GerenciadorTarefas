Program.cs - Descrição
O arquivo Program.cs é o ponto de entrada da aplicação. 
Ele é responsável por configurar todos os serviços que a aplicação irá utilizar, 
como a injeção de dependências, o banco de dados, o Swagger (para documentação da API) 
e as políticas de segurança, como o CORS. 
Também é aqui que o pipeline de execução de requisições HTTP é configurado.

Funcionalidade:
Configuração de banco de dados: Usa AppDbContext para conectar-se ao banco SQL Server.
Swagger: Documentação automática da API para facilitar o teste e a integração.
CORS: Permite ou restringe o acesso de diferentes origens à API.
Pipeline de requisições: Configura o comportamento da aplicação ao receber requisições HTTP,
 como redirecionar para HTTPS e mapear os controladores (MapControllers()).

Exemplo:
Se uma requisição chegar à API, o Program.cs garante que ela será roteada
corretamente, tratada conforme as políticas configuradas (como autorização e segurança),
e encaminhada para o controlador correspondente para ser processada.