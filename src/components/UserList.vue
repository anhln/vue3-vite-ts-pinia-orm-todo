<template>
  <div class="user-list">
    <v-row v-for="user in users" :key="user.id" class="user-row">
      <v-col md="8">
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
      </v-col>
      <v-col class="d-flex align-center">
        <p class="tasks">{{ user.todos.length }} Tasks</p>
      </v-col>
      <v-col class="d-flex align-end justify-end">
        <v-btn icon flat @click="destroy(user)">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import { User } from "@/models/User";
  import { useRepo } from "pinia-orm";
  import { computed } from "vue";
  // import data from "@/data";

  export default {
    setup() {
      const userRepo = useRepo(User);
      // userRepo.save(data.users);

      // computed users
      const users = computed(() => userRepo.with("todos").get());
      const destroy = (user) => {
        useRepo(User).destroy(user.id);
      };
      const update = (user, title) => {
        useRepo(User).save({ id: user.id, name: title });
      };
      const toggle = (user) => {
        useRepo(User).save({ id: user.id, done: !user.done });
      };
      return {
        users,
        toggle,
        update,
        destroy,
      };
    },
    methods: {},
  };
</script>
<style scoped lang="scss">
  .user-list {
    padding: 12px;
    .user-row {
      margin: 0px 8px 0 8px;
      .v-col {
        padding: 0 12px 0 12px;
      }
      &:hover {
        background-color: #fafafa;
        border-radius: 4px;
      }
      .input {
        flex-grow: 1;
        border: 0;
        padding: 12px 24px 12px 4px;
        width: 100%;
        background-color: transparent;
        transition: all 0.3s;
      }
    }
  }
</style>
