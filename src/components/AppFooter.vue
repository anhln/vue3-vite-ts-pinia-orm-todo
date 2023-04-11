<template>
  <div class="AppFooter">
    <p class="text">
      Proudly Created with <a href="https://vuejs.org/" target="_blank">Vue</a>,
      and Powered by <a href="https://pinia-orm.codedredd.de/">Pinia ORM</a>.
    </p>
  </div>
</template>

<style scoped lang="scss">
  @import "@/assets/styles/variables.scss";

  .AppFooter {
    padding-top: 96px;
    text-align: center;
    color: $c-gray;

    a {
      color: $c-black;
      transition: all 0.3s;
    }

    a:hover {
      color: $c-gray;
    }
  }
</style>
