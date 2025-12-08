import { KanbanColumn } from './KanbanColumn';
import { NewTaskForm } from './NewTaskForm';

export function KanbanBoard() {
  return (
    <div className="kanban-board">
      <div className="board-header">
        <h1>📊 Dashboard Kanban</h1>
        <NewTaskForm />
      </div>
      <div className="board-columns">
        <KanbanColumn status="todo" />
        <KanbanColumn status="in-progress" />
        <KanbanColumn status="done" />
      </div>
    </div>
  );
}
