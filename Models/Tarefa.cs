using System;
using System.ComponentModel.DataAnnotations;

namespace GerenciadorTarefas.Models
{
    public class Tarefa
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O título da tarefa é obrigatório.")]
        public string Title { get; set; } = string.Empty; // Inicializando como string vazia para evitar null

        [Required(ErrorMessage = "A descrição da tarefa é obrigatória.")]
        public string Description { get; set; } = string.Empty; // Inicializando como string vazia para evitar null

        public bool Completed { get; set; } = false; // Por padrão, uma tarefa é não concluída

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Data de criação da tarefa
    }
}
