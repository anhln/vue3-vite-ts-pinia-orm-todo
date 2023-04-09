<template>
  <v-container>
    <app-header />
    <AppDescription />
    <v-row>
      <v-col md="4"> <UsersSectionVue /></v-col>
      <v-col md="8"><todos-section></todos-section></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import { generateFakeData, Item } from "@/models/item";
  import { useMainStore } from "./store/index";

  import AppHeader from "./components/AppHeader.vue";
  import AppDescription from "./components/AppDescription.vue";
  import UsersSectionVue from "./components/UsersSection.vue";
  import TodosSection from "./components/TodosSection.vue";

  export default defineComponent({
    name: "App",
    components: {
      AppHeader,
      AppDescription,
      UsersSectionVue,
      TodosSection,
    },
    setup() {
      const items = ref<Item[]>([]);

      const mainStore = useMainStore();

      onMounted(() => {
        items.value = mainStore.items;
      });

      function createItem() {
        mainStore.createNewItem(generateFakeData());
      }

      function deleteItem(id: string) {
        mainStore.deleteItem(id);
      }

      function updateItem(id: string) {
        mainStore.updateItem(id, generateFakeData());
      }

      return {
        items,
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
</style>
