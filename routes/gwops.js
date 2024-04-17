import express from "express";
import { getGwops, createGwop, updateGwop, deleteGwop } from "../controllers/gwops.js";

const router = express.Router();

router.get('/', getGwops);
router.post('/', createGwop);
router.patch('/:id', updateGwop);
router.delete('/:id', deleteGwop);

export default router