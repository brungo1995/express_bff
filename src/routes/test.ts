import express from "express";
import TestController from "../controllers/testController";

const router = express.Router();

router.get("/test", async (_req, res) => {
    const controller = new TestController();
    const response = await controller.getMessage();
    return res.send(response)
});



export default router;