import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/create-user", UserController.create);

router.get("/:id", UserController.getSingle);

router.get("/", UserController.getAll);

// router.delete("/:id", TreeController.deleteTree);

router.patch("/:id", UserController.update);

export const UserRoutes = router;