import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { createPinia } from "pinia";
import { createORM } from "pinia-orm";

import "./assets/css/app.scss";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const pinia = createPinia().use(createORM());
const app = createApp(App);

app.use(router).use(pinia).use(vuetify).mount("#app");
