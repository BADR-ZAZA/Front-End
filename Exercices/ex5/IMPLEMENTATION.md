# 📊 Kanban Dashboard - Exercise 5 Implementation

## Project Overview
A fully functional Kanban board application built with React, Context API, and useReducer for complex state management.

## Architecture & Components

### 1. **KanbanContext** (`src/context/KanbanContext.jsx`)
- **Purpose**: Manages global state using useReducer pattern
- **State**: `{ tasks: [...] }` - Array of task objects
- **Actions**:
  - `ADD_TASK` - Adds new task to "À faire" column
  - `MOVE_TASK` - Moves task between columns by changing status
  - `REMOVE_TASK` - Deletes a task
- **Provider**: `KanbanProvider` wraps the entire app

### 2. **Custom Hook** (`src/hooks/useKanban.js`)
- Provides access to Kanban context throughout the app
- Throws error if used outside KanbanProvider

### 3. **Components**

#### **KanbanBoard** (`src/components/KanbanBoard.jsx`)
- Main board layout component
- Renders header, task form, and three columns

#### **KanbanColumn** (`src/components/KanbanColumn.jsx`)
- Displays tasks for a specific status
- Shows column header with task counter
- Features:
  - Filter tasks by status (todo, in-progress, done)
  - Display "Aucune tâche" message when empty
  - Task count badge

#### **TaskCard** (`src/components/TaskCard.jsx`)
- Individual task display
- Features:
  - Task title and ID
  - Context-aware action buttons:
    - "→ En cours" button only shows for "À faire" tasks
    - "✓ Terminé" button only shows for "En cours" tasks
    - "× Supprimer" button always available
  - Enforces strict workflow (todo → in-progress → done)

#### **NewTaskForm** (`src/components/NewTaskForm.jsx`)
- Input form for creating new tasks
- Auto-clears after submission
- Validates non-empty input

## Task Structure
```javascript
{
  id: number,           // Unique identifier (Date.now())
  title: string,        // Task description
  status: "todo" | "in-progress" | "done"
}
```

## State Workflow
```
"À faire" (todo)
     ↓
"En cours" (in-progress)
     ↓
"Terminé" (done)
```

## Styling Features
- **Color Scheme**: Purple gradient background with modern cards
- **Responsive Grid**: 3 columns on desktop, 1 column on mobile
- **Interactive Elements**:
  - Hover effects on task cards
  - Smooth transitions and animations
  - Color-coded buttons (green: move, blue: done, red: delete, purple: add)
- **User Experience**:
  - Task counter badges
  - Smooth scrolling with custom scrollbars
  - Proper spacing and typography
  - Empty state messages

## File Structure
```
src/
├── components/
│   ├── KanbanBoard.jsx       # Main board layout
│   ├── KanbanColumn.jsx      # Column with filtered tasks
│   ├── TaskCard.jsx          # Individual task card
│   └── NewTaskForm.jsx       # Task creation form
├── context/
│   └── KanbanContext.jsx     # State management with reducer
├── hooks/
│   └── useKanban.js          # Custom hook for context access
├── App.jsx                    # App entry point with provider
├── App.css                    # All styling
└── main.jsx
```

## Usage
1. Start dev server: `npm run dev`
2. Open http://localhost:5173
3. Add tasks using the input form at the top
4. Move tasks by clicking action buttons
5. Delete tasks with the "Supprimer" button

## Key Features ✅
- ✅ 3 columns with proper task filtering
- ✅ Add new tasks to "À faire"
- ✅ Move tasks between columns (enforcing workflow)
- ✅ Delete tasks (REMOVE_TASK action)
- ✅ Task counter in column headers
- ✅ Context + useReducer pattern
- ✅ Complex state management
- ✅ Responsive design
- ✅ Modern UI with animations

## Technologies Used
- React 19.2.0
- Context API & useReducer
- CSS3 (Flexbox, Grid, Gradients)
- Vite 7.2.4
