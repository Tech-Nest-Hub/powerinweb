import express from "express";
import { getTags } from "../controllers/tagController.ts";

const tag_router = express.Router();
tag_router.get("/tags", getTags);

export default tag_router;
