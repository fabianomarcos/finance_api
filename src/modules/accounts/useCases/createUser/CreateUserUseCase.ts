import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private userRepository: IUsersRepository
	) {}

	async execute({
		name,
		password,
		email,
		drive_license,
	}: ICreateUserDTO): Promise<void> {
		const passwordHash = await hash(password, 8);

		const userAlreadyExists = await this.userRepository.findByEmail(email);

		if (userAlreadyExists) throw new Error(`User ${email} already exists`);

		await this.userRepository.create({
			name,
			password: passwordHash,
			email,
			drive_license,
		});
	}
}
