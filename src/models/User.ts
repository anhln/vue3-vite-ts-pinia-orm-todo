import { Model } from "pinia-orm";
import Todo from "./Todo";

export class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.uid(),
      name: this.attr(""),
      todos: this.hasMany(Todo, "user_id"),
    };
  }
  // id!: number;
  // name!: string;
  // todos!: Array<Todo>;
}
