import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/create-user", UserController.create);

// router.get("/:id", TreeController.getSingle);

// router.get("/", TreeController.getAll);

// router.delete("/:id", TreeController.deleteTree);

// router.patch("/:id", TreeController.update);

export const UserRoutes = router;