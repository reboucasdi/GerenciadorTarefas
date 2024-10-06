import React, { useState } from 'react';
import ListaDeTarefas from './components/listadetarefas';
import EdicaoTarefas from './components/EdicaoTarefas';

function App() {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleTaskSaved = () => {
    setTaskToEdit(null);  // Limpa a tarefa sendo editada
    setRefresh(!refresh); // Atualiza a lista de tarefas
  };

  return (
    <div>
      <EdicaoTarefas taskToEdit={taskToEdit} onTaskSaved={handleTaskSaved} />
      <ListaDeTarefas onEdit={handleEditTask} refresh={refresh} />
    </div>
  );
}

export default App;


// Gerenciamento de estado: A tarefa sendo editada é armazenada no App.js, de forma que a lista e o formulário possam compartilhar esse estado.
// Revalidação da lista: O estado refresh força a lista de tarefas a ser recarregada sempre que uma tarefa for criada, editada ou excluída.