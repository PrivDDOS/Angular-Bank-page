import { Router } from "express";
import { createRequest } from "../controllers/bank.controllers.js";

const router = Router()

router.route('/createRequest').post(createRequest);

export default router