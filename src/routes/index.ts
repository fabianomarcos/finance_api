import { Router } from "express";

import { categoriesRoutes } from "./categories.route";
import { specificationRoutes } from "./specification.route";

const router = Router();


router.use("/categories", categoriesRoutes);
router.use("/specification", specificationRoutes);

export { router };
