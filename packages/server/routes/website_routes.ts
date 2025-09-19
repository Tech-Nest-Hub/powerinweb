
import express, { type Request, type Response } from "express";

const website_router = express.Router();

website_router.get('/websites', (req:Request, res:Response) => {
    res.send('websites');
});

export default website_router;