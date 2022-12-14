import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
	ICreateSpecificationDTO,
	ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
	private repository: Repository<Specification>;

	constructor() {
		this.repository = getRepository(Specification);
	}

	async findByName(name: string): Promise<Specification | undefined> {
		const specification = await this.repository.findOne({ name });
		return specification;
	}

	async list(): Promise<Specification[]> {
		const specifications = await this.repository.find();
		return specifications;
	}

	async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
		const specification = this.repository.create({ name, description });
		await this.repository.save(specification);
	}
}

export { SpecificationsRepository };
