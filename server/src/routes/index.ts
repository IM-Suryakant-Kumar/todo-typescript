import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers";

const router: Router = Router();

router.route("/todos").get(getTodos);
router.route("/add-todo").get(addTodo);
router.route("/edit-tod/:id").get(updateTodo);
router.route("/delete-todo/:id").get(deleteTodo);

export default router;
