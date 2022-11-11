import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
	email: string;
	password: string;
}

interface IUser {
	name: string;
	email: string;
}

interface IResponse {
	user: IUser;
	token: string;
}

@injectable()
export class AuthenticateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.usersRepository.findByEmail(email);
		if (!user) throw new Error("Email or password incorrect!");

		const passwordMatch = await compare(password, user.password);
		if (!passwordMatch) throw new Error("Email or password incorrect!");

		const token = sign({}, "b8ca715cc84a1b0312d77ab05ee90a66", {
			subject: user.id,
			expiresIn: "1d",
		});

		const { email: e_mail, name } = user;

		return {
			token,
			user: { name, email: e_mail },
		};
	}
}
