import { Category } from "../../entities/Category";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
	constructor(private specificationRepository: ISpecificationRepository) {}

	execute(): Category[] {
		return this.specificationRepository.list();
	}
}

export { ListSpecificationUseCase };
