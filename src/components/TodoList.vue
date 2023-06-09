<template>
  <div class="todo-list">
    <div
      v-for="todo in todoStore.todos"
      :key="todo.id"
      class="todo"
      :class="{ done: todo.done }"
    >
      <v-btn icon flat @click="toggle(todo)">
        <v-icon>mdi-check</v-icon>
      </v-btn>

      <input
        class="input"
        :value="todo.title"
        placeholder="Type in the title of the task!"
        @input="
          (e) => {
            update(todo, e.target.value);
          }
        "
      />

      <TodoListAssignee :todo-id="todo.id" />

      <v-btn icon flat @click="destroy(todo)">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
  import TodoListAssignee from "./TodoListAssignee.vue";
  import { useTodoStore } from "@/store/modules/todo";

  export default {
    components: {
      TodoListAssignee,
    },

    setup() {
      const todoStore = useTodoStore();

      const toggle = (todo) => {
        todoStore.save({
          id: todo.id,
          done: !todo.done,
        });
      };

      const update = (todo, title) => {
        todoStore.update(todo, title);
      };

      const destroy = (todo) => {
        todoStore.destroy(todo.id);
      };
      return {
        todoStore,
        toggle,
        update,
        destroy,
      };
    },
  };
</script>

<style scoped>
  .todo-list {
    padding-bottom: 24px;
  }
  .todo {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--c-divider);
  }

  .todo:hover {
    background-color: #fafafa;
  }

  .todo:hover .svg {
    opacity: 1;
  }

  .todo.done {
    .input {
      text-decoration: line-through;
      color: var(--c-gray);
    }

    .icon .svg.check {
      fill: #38d2d8;
    }
  }

  .input {
    flex-grow: 1;
    border: 0;
    padding: 12px 24px 12px 0;
    width: 100%;
    background-color: transparent;
    transition: all 0.3s;
  }

  .icon {
    display: block;
    padding: 12px 24px;
  }

  .icon:hover .svg {
    fill: var(--c-black);
  }

  .icon:hover .svg.check {
    fill: var(--c-black);
  }

  .svg {
    width: 14px;
    height: 14px;
    opacity: 0;
    transform: translateY(2px);
    transition: all 0.3s;
    fill: var(--c-gray);
  }

  .svg.check {
    opacity: 1;
    fill: var(--c-gray-light);
  }
</style>
