using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GerenciadorTarefas.Migrations
{
    public partial class InitialSync : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Verifique se a coluna já existe antes de tentar adicioná-la
            // migrationBuilder.AddColumn<DateTime>(
            //     name: "DataCriacao",
            //     table: "Tarefas",
            //     type: "datetime2",
            //     nullable: false,
            //     defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // // Não precisa remover a coluna, pois já existe
            // migrationBuilder.DropColumn(
             //   name: "DataCriacao",
               //  table: "Tarefas");
        }
    }
}
