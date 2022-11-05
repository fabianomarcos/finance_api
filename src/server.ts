import express from "express";

import { categoriesRoutes } from "./routes/categories.route";
import { specificationRoutes } from "./routes/specification.route";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specification", specificationRoutes);

app.listen(3333, () => console.log("Server is running!"));
