import express from "express";
import { creategwopBook, deleteGwopBook, getgwopBook, getgwopBooks, updateGwopBook } from "../controllers/gwopBook.js";

const router = express.Router();

router.get('/:title', getgwopBook);

router.get('/', getgwopBooks);
router.post('/', creategwopBook);
router.patch('/:id', updateGwopBook);
router.delete('/:id', deleteGwopBook);

export default router;