import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, Checkbox, TextField, Box, FormControlLabel, Switch } from '@mui/material';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

// Formulário para criação e edição de tarefas
function FormularioTarefa({ tarefaAtual, onSave }) {
  const [titulo, setTitulo] = useState(tarefaAtual ? tarefaAtual.titulo : '');
  const [descricao, setDescricao] = useState(tarefaAtual ? tarefaAtual.descricao : '');

  useEffect(() => {
    if (tarefaAtual) {
      setTitulo(tarefaAtual.titulo);
      setDescricao(tarefaAtual.descricao);
    } else {
      setTitulo('');
      setDescricao('');
    }
  }, [tarefaAtual]);

  const handleSave = async () => {
    if (!titulo || !descricao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    const now = new Date().toISOString();
  
    const tarefaParaSalvar = {
      ...tarefaAtual,
      titulo,
      descricao,
      dataCriacao: tarefaAtual ? tarefaAtual.dataCriacao : now, // Mantém a data de criação ou define a atual
      dataEdicao: tarefaAtual ? now : now, // Atualiza a data de edição ou define como a data de criação
      status: tarefaAtual ? tarefaAtual.status : false, // Mantém o status ou define como não concluída
    };
  
    try {
      if (tarefaAtual?.id) {
        // Editar tarefa existente
        const response = await axios.put(`http://localhost:5275/api/tarefas/${tarefaAtual.id}`, tarefaParaSalvar);
        onSave(response.data);
      } else {
        // Criar nova tarefa
        const response = await axios.post('http://localhost:5275/api/tarefas', tarefaParaSalvar);
        onSave(response.data);
      }
      setTitulo('');
      setDescricao('');
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
      alert('Erro ao salvar tarefa');
    }
  };

  if (!tarefaAtual) {
    return null;
  }

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      marginBottom={10}
    >
      <TextField
        label="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={handleSave}>
          {tarefaAtual ? 'Salvar Alterações' : 'Atualizar Tarefa'}
        </Button>
      </Box>
    </Box>
  );
}

// Componente da lista de tarefas
function ListaDeTarefas() {
  const [tasks, setTasks] = useState([]);
  const [tarefaAtual, setTarefaAtual] = useState(null); // Tarefa que está sendo editada
  const [filtro, setFiltro] = useState(''); // Filtro por título
  const [exibirNaoConcluidas, setExibirNaoConcluidas] = useState(false); // Filtro para exibir não concluídas

  // Carregar as tarefas da API quando o componente for montado
  useEffect(() => {
    async function fetchTarefas() {
      try {
        const response = await axios.get("http://localhost:5275/api/tarefas");
        setTasks(response.data);
      } catch (error) {
        console.error('Erro ao buscar as tarefas:', error);
      }
    }
    fetchTarefas();
  }, []);

  // Função para adicionar ou atualizar uma tarefa
  const handleSave = (tarefaSalva) => {
    if (tarefaAtual?.id) {
      // Atualiza a tarefa editada na lista
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === tarefaSalva.id ? tarefaSalva : task))
      );
    } else {
      // Adiciona uma nova tarefa à lista
      setTasks((prevTasks) => [...prevTasks, tarefaSalva]);
    }
    setTarefaAtual(null); // Limpa o formulário após salvar
  };

  // Função para marcar a tarefa como concluída
  const handleToggleComplete = (task) => {
    axios.put(`http://localhost:5275/api/tarefas/${task.id}`, { ...task, status: !task.status })
      .then(() => {
        setTasks(tasks.map(t => t.id === task.id ? { ...t, status: !t.status } : t));
      })
      .catch(error => console.error('Erro ao atualizar a tarefa:', error));
  };

  // Função para excluir uma tarefa
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5275/api/tarefas/${id}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error('Erro ao deletar a tarefa:', error));
  };

  // Função para editar uma tarefa
  const handleEdit = (task) => {
    setTarefaAtual(task);
  };

  // Função de filtro de tarefas
  const tarefasFiltradas = tasks.filter((task) => {
    const matchTitulo = task.titulo.toLowerCase().includes(filtro.toLowerCase());
    const matchStatus = exibirNaoConcluidas ? !task.status : true; // Inverter a lógica para exibir não concluídas
    return matchTitulo && matchStatus;
  });

  return (
    <>
      {/* Formulário para criar/editar tarefas */}
      <FormularioTarefa tarefaAtual={tarefaAtual} onSave={handleSave} />

      {/* Filtros */}
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <TextField
          label="Filtrar por Título"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <FormControlLabel
          control={
            <Switch
              checked={exibirNaoConcluidas}
              onChange={() => setExibirNaoConcluidas(!exibirNaoConcluidas)}
              color="primary"
            />
          }
          label="Exibir apenas não concluídas"
        />
      </Box>

      {/* Lista de tarefas */}
      <List>
        {tarefasFiltradas.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.status}
              onChange={() => handleToggleComplete(task)}
            />
            <ListItemText
              primary={task.titulo}
              secondary={
                <>
                  <span>{task.descricao}</span>
                  <br />
                  <span>
                    Data de Criação: {task.dataCriacao ? format(parseISO(task.dataCriacao), 'dd/MM/yyyy HH:mm') : "Data inválida"}
                  </span>
                  <br />
                  <span>
                    Última Edição: {task.dataEdicao && task.dataEdicao !== "0001-01-01T00:00:00" 
                      ? format(parseISO(task.dataEdicao), 'dd/MM/yyyy HH:mm') 
                      : format(parseISO(task.dataCriacao), 'dd/MM/yyyy HH:mm')}
                  </span>
                </>
              }
            />
            <Button variant="contained" color="primary" onClick={() => handleEdit(task)}>
              Editar
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(task.id)}>
              Excluir
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListaDeTarefas;



//Porquê:

// O useEffect carrega as tarefas quando o componente é montado.
// A função handleDelete exclui uma tarefa, e em seguida, atualiza a lista de tarefas no frontend.
// A função handleToggleComplete atualiza o status da tarefa (concluída/não concluída) na API, refletindo essa alteração no frontend.
