import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "modules/accounts/repositories/IUserRepository";
import { deleteFile } from "utils/file";

interface IRequest {
	user_id: string;
	avatar?: string;
}

@injectable()
export class UpdateAvatarUseCase {
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	) {}
	async execute({ avatar, user_id }: IRequest) {
		const user = await this.usersRepository.findById(user_id);

		if (user?.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`);

		if (user) {
			user.avatar = avatar;
			await this.usersRepository.create(user);
		}
	}
}
