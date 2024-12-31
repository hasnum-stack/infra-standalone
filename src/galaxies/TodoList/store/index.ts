import { create } from 'zustand';

interface Todo {
  todos: string[];
  addTodo: (todo: string) => void;
  removeTodo: (todo: string) => void;
  clearTodos: () => void;
}
const useStore = create<Todo>()((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) =>
    set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
  clearTodos: () => set({ todos: [] }),
}));
export default useStore;
