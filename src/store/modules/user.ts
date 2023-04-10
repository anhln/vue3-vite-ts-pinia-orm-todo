import { defineStore } from "pinia";
import { User } from "@/models/User";
import { useRepo } from "pinia-orm";
import data from "@/data";

const userRepo = useRepo(User);

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  actions: {
    initilizeUsers() {
      userRepo.save(data.users);
    },
    createNewUser(user: User) {
      if (!user) return;
      userRepo.save(user);
    },
  },
});
