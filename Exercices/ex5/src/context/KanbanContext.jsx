import { createContext, useReducer, useCallback } from 'react';

export const KanbanContext = createContext();

// Initial state
const initialState = {
  tasks: [
    { id: 1, title: 'Apprendre React', status: 'todo' },
    { id: 2, title: 'Créer un composant', status: 'todo' },
    { id: 3, title: 'Gérer l\'état', status: 'in-progress' },
    { id: 4, title: 'Déployer l\'app', status: 'done' },
  ],
};

// Reducer function
function kanbanReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.payload,
            status: 'todo',
          },
        ],
      };

    case 'MOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.newStatus }
            : task
        ),
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}

// Provider component
export function KanbanProvider({ children }) {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  const addTask = useCallback((title) => {
    if (title.trim()) {
      dispatch({ type: 'ADD_TASK', payload: title });
    }
  }, []);

  const moveTask = useCallback((id, newStatus) => {
    dispatch({ type: 'MOVE_TASK', payload: { id, newStatus } });
  }, []);

  const removeTask = useCallback((id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  }, []);

  const value = {
    tasks: state.tasks,
    addTask,
    moveTask,
    removeTask,
  };

  return (
    <KanbanContext.Provider value={value}>
      {children}
    </KanbanContext.Provider>
  );
}
