import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateAvatarController";
import uploadConfig from "../config/upload";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateAvatarController = new UpdateAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
	"/avatar",
	ensureAuthenticated,
	uploadAvatar.single("avatar"),
	updateAvatarController.handle
);

export { usersRoutes };
