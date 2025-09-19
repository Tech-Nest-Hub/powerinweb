import express, { type Request, type Response } from "express";
import website_router from "./routes/website_routes.ts";

export const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/api', website_router)

app.get('/', (req : Request, res: Response) => {
    res.send('Welcome To Power In Web Backend!');
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});