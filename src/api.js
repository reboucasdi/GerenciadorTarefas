import axios from 'axios';

// URL base da API
const API_URL = 'http://localhost:5275/api/tarefas';
  
// Função para buscar todas as tarefas
export const getTarefas = () => {
  return axios.get(API_URL);
};

// Função para deletar uma tarefa por ID
export const deleteTarefa = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Função para atualizar uma tarefa (marcar como concluída)
export const updateTarefa = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};