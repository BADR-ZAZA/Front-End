import { useKanban } from '../hooks/useKanban';

export function TaskCard({ task }) {
  const { moveTask, removeTask } = useKanban();

  const canMoveToInProgress = task.status === 'todo';
  const canMoveToDone = task.status === 'in-progress';

  return (
    <div className="task-card">
      <div className="task-content">
        <h4>{task.title}</h4>
        <span className="task-id">ID: {task.id}</span>
      </div>
      <div className="task-actions">
        {canMoveToInProgress && (
          <button
            className="btn btn-primary"
            onClick={() => moveTask(task.id, 'in-progress')}
            title="Déplacer en cours"
          >
            → En cours
          </button>
        )}
        {canMoveToDone && (
          <button
            className="btn btn-success"
            onClick={() => moveTask(task.id, 'done')}
            title="Marquer comme terminé"
          >
            ✓ Terminé
          </button>
        )}
        <button
          className="btn btn-danger"
          onClick={() => removeTask(task.id)}
          title="Supprimer la tâche"
        >
          × Supprimer
        </button>
      </div>
    </div>
  );
}
