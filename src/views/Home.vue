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
  import { defineComponent } from "vue";

  import AppHeader from "@/components/AppHeader.vue";
  import AppDescription from "@/components/AppDescription.vue";
  import UsersSectionVue from "@/components/UsersSection.vue";
  import TodosSection from "@/components/TodosSection.vue";

  export default defineComponent({
    name: "App",
    components: {
      AppHeader,
      AppDescription,
      UsersSectionVue,
      TodosSection,
    },
    setup() {
      return {};
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
