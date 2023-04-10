import { defineStore } from "pinia";
import Todo from "@/models/Todo";
import { useRepo } from "pinia-orm";

const todoRepo = useRepo(Todo);
export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  actions: {
    createNewTodo(todo: Todo) {
      if (!todo) return;
      todoRepo.save(todo);
    },
  },
});
