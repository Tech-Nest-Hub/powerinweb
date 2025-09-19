
import express, { type Request, type Response } from "express";
import { createWebsite, getWebsites } from "../controllers/websiteController.ts";

const website_router = express.Router();

website_router.get('/websites', getWebsites)
website_router.post('/websites', createWebsite)

export default website_router;