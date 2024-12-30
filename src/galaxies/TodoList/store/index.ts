import { create } from 'zustand';

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) =>
    set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
  clearTodos: () => set({ todos: [] }),
}));
export default useStore;
