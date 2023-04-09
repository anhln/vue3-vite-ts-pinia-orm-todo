<template>
  <div class="UsersList">
    <div v-for="user in users" :key="user.id" class="user">
      <v-btn icon flat @click="toggle(user)">
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <input
        class="input"
        :value="user.name"
        placeholder="Type in user's name!"
        @input="
          (e) => {
            update(user, e.target.value);
          }
        "
      />

      <p class="tasks">{{ user.todos.length }} Tasks</p>

      <v-btn class="icon" @click="destroy(user)">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
  import { User } from "@/models/User";
  import { useRepo } from "pinia-orm";
  import { ref, computed, reactive } from "vue";
  import data from "@/data";

  export default {
    setup() {
      const userRepo = useRepo(User);
      userRepo.save(data.users);

      // computed users
      const users = computed(() => userRepo.with("todos").get());

      return {
        users,
      };
    },
    methods: {
      destroy() {
        console.log("destroy");
      },
      update(user, title) {
        useRepo(User).save({ id: user.id, name: title });
      },
      toggle(user) {
        useRepo(User).save({ id: user.id, done: !user.done });
      },
    },
  };
</script>
<style scoped>
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
