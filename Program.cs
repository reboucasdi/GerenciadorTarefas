using GerenciadorTarefas.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configura o banco de dados SQL Server
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Adiciona serviços ao contêiner
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuração de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();

// Aplicando a política de CORS
app.UseCors("AllowAll");

// Configure o pipeline de requisições HTTP
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage(); // Facilita depuração
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Somente aplicar o redirecionamento para HTTPS fora do ambiente de desenvolvimento
app.UseHttpsRedirection();

app.UseAuthorization();

// Mapeia automaticamente os controladores criados
app.MapControllers();

// Endpoint de teste
app.MapGet("/teste", () => "API está funcionando!");

app.Run();
