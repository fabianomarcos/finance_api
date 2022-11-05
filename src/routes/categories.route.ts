import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
	return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
	const categories = categoriesRepository.list();
	return response.json(categories);
})

export { categoriesRoutes };
