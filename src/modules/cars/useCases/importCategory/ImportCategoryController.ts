import { Response, Request } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
	constructor(private importCategoryUserCase: ImportCategoryUseCase) {}

	handle(request: Request, response: Response): Response {
		const { file } = request;

		if (file) this.importCategoryUserCase.execute(file);

		return response.send();
	}
}

export { ImportCategoryController };
