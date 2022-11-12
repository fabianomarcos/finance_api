import { getRepository, Repository } from "typeorm";

import { User } from "modules/accounts/entities/User";
import { ICreateUserDTO } from "modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "modules/accounts/repositories/IUserRepository";

export class UsersRepository implements IUsersRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = getRepository(User);
	}

	async findById(id: string): Promise<User | undefined> {
		const user = await this.repository.findOne(id);
		return user;
	}

	async findByEmail(email: string): Promise<User | undefined> {
		const user = await this.repository.findOne({ email });
		return user;
	}

	async create({ name, email, drive_license, password, avatar, id }: ICreateUserDTO) {
		const user = this.repository.create({
			name,
			email,
			drive_license,
			password,
			avatar,
			id,
		});

		await this.repository.save(user);
	}
}
