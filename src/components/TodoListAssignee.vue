<template>
  <div class="TodosAssignee">
    <v-icon>mdi-account</v-icon>

    <select
      :class="{ selected: !!todo.assignee }"
      class="select"
      @change="update"
    >
      <option class="option" value="">Choose assignee</option>
      <option
        v-for="user in users"
        :key="user.id"
        :value="user.id"
        :selected="todo.user_id == user.id"
        class="option"
      >
        {{ user.name }}
      </option>
    </select>

    <v-icon>mdi-chevron-down</v-icon>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { User } from "@/models/User";
  import Todo from "@/models/Todo";
  import { useRepo } from "pinia-orm";

  export default defineComponent({
    props: {
      todoId: { type: String, required: true },
    },
    setup(props) {
      const users = computed(() => useRepo(User).orderBy("name").get());

      const todo = computed(() =>
        useRepo(Todo).with("assignee").find(props.todoId)
      );
      const update = (e) => {
        useRepo(Todo).save({
          id: props.todoId,
          user_id: e.target.value,
        });
      };

      return {
        users,
        todo,
        update,
      };
    },
  });
</script>

<style scoped>
  .TodosAssignee {
    position: relative;
    display: flex;
    align-items: center;
  }

  .user {
    width: 14px;
    height: 14px;
    fill: var(--c-gray);
  }

  .select {
    position: relative;
    z-index: 1;
    border: 0;
    padding-right: 16px;
    padding-left: 12px;
    color: var(--c-gray);
    background-color: transparent;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
  }

  .select.selected {
    color: var(--c-black);
  }

  .option {
    color: var(--c-gray-dark);
  }

  .down {
    position: absolute;
    top: 10px;
    right: 0;
    width: 8px;
    height: 8px;
    fill: var(--c-gray);
  }
</style>
