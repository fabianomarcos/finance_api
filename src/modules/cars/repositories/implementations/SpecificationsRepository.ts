import { Category } from "../../model/Category";
import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO } from "../ISpecificationRepository";
import { ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
	private specifications: Specification[] = [];

	constructor() {
		this.specifications = [];
	}

	findByName(name: string): Specification | undefined {
		return this.specifications.find(spec => spec.name === name);
	}

	list(): Category[] {
		throw new Error("Method not implemented.");
	}

	create({ name, description }: ICreateSpecificationDTO): void {
		const specification =  new Specification();

		Object.assign(specification, { name, description, created_at: new Date() });

		this.specifications.push(specification);
	}
}

export { SpecificationsRepository }
