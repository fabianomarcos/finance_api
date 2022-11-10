import { inject, injectable } from "tsyringe";

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
		username,
	}: ICreateUserDTO): Promise<void> {
		await this.userRepository.create({
			name,
			password,
			email,
			drive_license,
			username,
		});
	}
}
