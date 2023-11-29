import { Router } from "express";
import { BusinessController } from "../controller/business.controller.js";

const router = Router();

router.get("/" ,BusinessController.getAllBusiness);
router.get("/:bid", BusinessController.getOneBusiness);
router.post("/", BusinessController.createBusiness);
router.put("/:bid/products",BusinessController.addProducts);



export {router as businesRouter}