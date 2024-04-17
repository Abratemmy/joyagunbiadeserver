import express from "express";
import { getGesFeedback, createGesFeedback, updateGesFeedback, deleteGesFeedback } from "../controllers/gesfeedback.js";

const router = express.Router();

router.get('/', getGesFeedback);
router.post('/', createGesFeedback);
router.patch('/:id', updateGesFeedback);
router.delete('/:id', deleteGesFeedback);

export default router;