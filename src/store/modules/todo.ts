import { defineStore } from "pinia";
import Todo from "@/models/Todo";
import { useRepo } from "pinia-orm";

const todoRepo = useRepo(Todo);
export const useTodoStore = defineStore("todo", {
  state: () => ({
    rawTodos: [],
  }),
  getters: {
    todos: () => {
      const todos = todoRepo.all();
      return todos;
    },
  },
  actions: {
    createNewTodo(todo: Todo) {
      if (!todo) return;
      todoRepo.save(todo);
    },
    save(todo: Todo) {
      todoRepo.save(todo);
    },
    update(todo: Todo, title: string) {
      todoRepo.save({ id: todo.id, title: title });
    },
    destroy(id: string) {
      todoRepo.destroy(id);
    },
  },
});
