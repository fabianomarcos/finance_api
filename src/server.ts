import "reflect-metadata";
import express, { Response, Request } from "express";
import "express-async-errors";

import swagger from "swagger-ui-express";
import "./database";
import "./shared/container";
import { router } from "./routes";
import { AppError } from "./errors/AppError";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile));

app.use(router);

app.use((err: Error, _: Request, response: Response) => {
	if (err instanceof AppError)
		return response.status(err.statusCode).json({ message: err.message });

	return response
		.status(500)
		.json({ status: "error", message: `Internal server error - ${err.message}` });
});

app.listen(3333, () => console.log("Server is running!"));
