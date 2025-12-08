import { useKanban } from '../hooks/useKanban';
import { TaskCard } from './TaskCard';

export function KanbanColumn({ status }) {
  const { tasks } = useKanban();

  const columnTasks = tasks.filter((task) => task.status === status);

  const columnTitles = {
    todo: 'À faire',
    'in-progress': 'En cours',
    done: 'Terminé',
  };

  const columnTitle = columnTitles[status];

  return (
    <div className="kanban-column">
      <div className="column-header">
        <h3>{columnTitle}</h3>
        <span className="task-count">({columnTasks.length})</span>
      </div>
      <div className="column-content">
        {columnTasks.length === 0 ? (
          <p className="empty-message">Aucune tâche</p>
        ) : (
          columnTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
