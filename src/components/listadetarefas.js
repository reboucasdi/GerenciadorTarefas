import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { getTarefas, deleteTarefa, updateTarefa } from '../api';
import axios from 'axios';
import { Checkbox } from '@mui/material';

function ListaDeTarefas({ onEdit }) {  
  const [tasks, setTasks] = useState([]);

  // Carrega as tarefas da API quando o componente é montado
  useEffect(() => {
    axios.get('http://localhost:5275/api/tarefas')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Erro ao buscar as tarefas:', error));
  }, []);

  // Função para excluir uma tarefa
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5275/api/tarefas/${id}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error('Erro ao deletar a tarefa:', error));
  };

  // Função para marcar a tarefa como concluída
  const handleToggleComplete = (task) => {
    axios.put(`http://localhost:5275/api/tarefas/${task.id}`, { ...task, completed: !task.completed })
      .then(() => {
        setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
      })
      .catch(error => console.error('Erro ao atualizar a tarefa:', error));
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => handleToggleComplete(task)}
          />
          <ListItemText primary={task.title} secondary={task.description} />
          <Button variant="contained" color="primary" onClick={() => onEdit(task)}>Editar</Button>
          <Button variant="contained" color="secondary" onClick={() => handleDelete(task.id)}>Excluir</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default ListaDeTarefas;

//Porquê:

// O useEffect carrega as tarefas quando o componente é montado.
// A função handleDelete exclui uma tarefa, e em seguida, atualiza a lista de tarefas no frontend.
// A função handleToggleComplete atualiza o status da tarefa (concluída/não concluída) na API, refletindo essa alteração no frontend.
