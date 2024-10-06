import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { createTarefa, updateTarefa } from '../api';
import axios from 'axios';

function EdicaoTarefas({ taskToEdit, onTaskSaved }) {  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      axios.put(`http://localhost:5275/api/tarefas/${taskToEdit.id}`, {
        title,
        description
      })
        .then(() => onTaskSaved())
        .catch(error => console.error('Erro ao editar tarefa:', error));
    } else {
      axios.post('http://localhost:5275/api/tarefas', {
        title,
        description
      })
        .then(() => onTaskSaved())
        .catch(error => console.error('Erro ao criar tarefa:', error));
    }

    // Limpa os campos
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {taskToEdit ? 'Atualizar Tarefa' : 'Criar Tarefa'}
      </Button>
    </form>
  );
}

export default EdicaoTarefas;

// Porquê:
// O componente pode ser usado tanto para criar novas tarefas quanto para editar tarefas existentes.
// A função handleSubmit decide se será feita uma requisição POST ou PUT com base no valor de taskToEdit. Se taskToEdit estiver preenchido, a tarefa será atualizada. Caso contrário, uma nova será criada.

