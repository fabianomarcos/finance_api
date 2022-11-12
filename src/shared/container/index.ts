import { container } from "tsyringe";

import { IUsersRepository } from "modules/accounts/repositories/IUserRepository";
import { UsersRepository } from "modules/accounts/repositories/implementations/UsersRepository";
import { ICategoriesRepository } from "modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationRepository } from "modules/cars/repositories/ISpecificationRepository";
import { SpecificationsRepository } from "modules/cars/repositories/implementations/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
	"CategoriesRepository",
	CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
	"SpecificationsRepository",
	SpecificationsRepository
);

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
