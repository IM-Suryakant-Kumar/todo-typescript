import express, { Express } from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

config();
const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bnrckzh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose
	.connect(uri)
	.then(() => {
		app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
	})
	.catch((error) => {
		throw error;
	});
