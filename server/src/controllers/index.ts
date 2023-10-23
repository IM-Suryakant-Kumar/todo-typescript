import { Request, Response } from "express";
import { ITodo } from "../types/todo";
import Todo from "../models/Todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as 
        
    } catch (error) {
        throw error
    }
}