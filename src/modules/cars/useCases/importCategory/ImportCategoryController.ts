import { Response, Request } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { file } = request;

		const importCategoryUserCase = container.resolve(ImportCategoryUseCase);

		if (file) await importCategoryUserCase.execute(file);

		return response.status(201).send();
	}
}

export { ImportCategoryController };
