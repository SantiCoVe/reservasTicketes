import express from "express";
import registerController from "../controllers/register-controller";

const router = express.Router();

router.get('/', registerController)

export default router;