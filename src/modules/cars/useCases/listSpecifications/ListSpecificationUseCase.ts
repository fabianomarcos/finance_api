import { inject, injectable } from "tsyringe";

import { Specification } from "modules/cars/entities/Specification";
import { ISpecificationRepository } from "modules/cars/repositories/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
	constructor(
		@inject("SpecificationsRepository")
		private specificationRepository: ISpecificationRepository
	) {}

	async execute(): Promise<Specification[]> {
		const specifications = await this.specificationRepository.list();
		return specifications;
	}
}

export { ListSpecificationUseCase };
