import { RouterView } from 'vue-router';

<template>
  <RouterView />
</template>

<!-- <script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import { useMainStore } from "./store/index";

  import AppHeader from "./components/AppHeader.vue";
  import AppDescription from "./components/AppDescription.vue";
  import UsersSectionVue from "./components/UsersSection.vue";
  import TodosSection from "./components/TodosSection.vue";
  import AppFooter from "./components/AppFooter.vue";

  export default defineComponent({
    name: "App",
    components: {
      AppHeader,
      AppDescription,
      UsersSectionVue,
      TodosSection,
      AppFooter,
    },
    setup() {
      const mainStore = useMainStore();

      onMounted(() => {});

      function createItem() {
        // mainStore.createNewItem(generateFakeData());
      }

      function deleteItem(id: string) {
        // mainStore.deleteItem(id);
      }

      function updateItem(id: string) {
        // mainStore.updateItem(id, generateFakeData());
      }

      return {
        createItem,
        deleteItem,
        updateItem,
      };
    },
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style> -->
