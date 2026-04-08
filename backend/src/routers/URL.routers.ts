import { Router } from "express";
import type { Router as RouterType } from "express"
import { URLController } from "../controllers/URL.controller";



const router : RouterType = Router()

router.route("/c").post(URLController.manageUrl)


router.route("/:shortCode").get(URLController.redirectUrl)


export default router
