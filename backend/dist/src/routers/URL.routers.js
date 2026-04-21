import { Router } from "express";
import { URLController } from "../controllers/URL.controller";
const router = Router();
router.route("/c").post(URLController.manageUrl);
router.route("/:shortCode").get(URLController.redirectUrl);
export default router;
//# sourceMappingURL=URL.routers.js.map