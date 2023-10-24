import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers";

const router: Router = Router();

router.route("/todos").get(getTodos);
router.route("/add-todo").post(addTodo);
router.route("/edit-tod/:id").put(updateTodo);
router.route("/delete-todo/:id").delete(deleteTodo);

export default router;
