import { CategoryRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoryRepository();
const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController =  new ListCategoriesController(listCategoryUseCase);

export { listCategoriesController };
