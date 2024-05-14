import express from "express"
import validateToken from "../middleware/validateToken";
const router = express.Router();

router.get('/', validateToken, );

export default router;