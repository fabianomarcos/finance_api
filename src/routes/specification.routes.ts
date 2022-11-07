import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
	return createSpecificationController.handle(request, response)
});

specificationRoutes.get("/", (request, response) => {
	return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
