import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationsRepository.getInstance();

const createCategoryUseCase = new CreateSpecificationUseCase(specificationRepository);

const createSpecificationController = new CreateSpecificationController(createCategoryUseCase);

export { createSpecificationController };
