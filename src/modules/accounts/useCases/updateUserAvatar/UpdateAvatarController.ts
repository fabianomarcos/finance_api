import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";

export class UpdateAvatarController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;
		const avatar = request.file?.filename;

		const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase);

		await updateAvatarUseCase.execute({ user_id: id, avatar });

		return response.status(204).send();
	}
}
