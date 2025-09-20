
import express from "express";
import { createCategory, getCategories } from "../controllers/categoriesController.ts";

const category_router = express.Router();

category_router.get('/categories', getCategories)
category_router.post('/categories', createCategory)

export default category_router;