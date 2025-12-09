import { useState } from 'react';
import { useKanban } from '../hooks/useKanban';

export function NewTaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useKanban();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une nouvelle tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="btn btn-add">
        + Ajouter
      </button>
    </form>
  );
}
