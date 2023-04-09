import { Model } from "pinia-orm";
import { User } from "./User";

export default class Todo extends Model {
  static entity = "todos";

  static fields() {
    return {
      id: this.uid(),
      user_id: this.uid(),
      title: this.string(""),
      done: this.boolean(false),
      assignee: this.belongsTo(User, "user_id"),
    };
  }
}
