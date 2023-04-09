// Emulating todo records which should be returned from API backend
// in the real world.
export default {
  users: [
    {
      id: 1,
      name: "John Doe",
      todos: [
        {
          title: "Create awesome application!",
          done: false,
        },
        {
          title: "Read the documentation",
          done: false,
        },
      ],
    },
    {
      id: 2,
      name: "Johnny Doe",
      todos: [
        {
          title: "Star Vuex ORM repository",
          done: false,
        },
      ],
    },
  ],
};
