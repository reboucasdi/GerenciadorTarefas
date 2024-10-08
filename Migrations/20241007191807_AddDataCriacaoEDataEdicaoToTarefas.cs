using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GerenciadorTarefas.Migrations
{
    /// <inheritdoc />
    public partial class AddDataCriacaoEDataEdicaoToTarefas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Tarefas",
                newName: "Titulo");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Tarefas",
                newName: "Descricao");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Tarefas",
                newName: "DataEdicao");

            migrationBuilder.RenameColumn(
                name: "Completed",
                table: "Tarefas",
                newName: "Status");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataCriacao",
                table: "Tarefas",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataCriacao",
                table: "Tarefas");

            migrationBuilder.RenameColumn(
                name: "Titulo",
                table: "Tarefas",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Tarefas",
                newName: "Completed");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Tarefas",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "DataEdicao",
                table: "Tarefas",
                newName: "CreatedAt");
        }
    }
}
