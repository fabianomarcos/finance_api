import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import type { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
	constructor(
		@inject("CategoriesRepository")
		private categoriesRepository: ICategoriesRepository
	) {}

	async execute(): Promise<Category[]> {
		const categories = await this.categoriesRepository.list();
		return categories;
	}
}

export { ListCategoriesUseCase };
