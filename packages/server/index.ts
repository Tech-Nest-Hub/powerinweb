import express, { type Request, type Response } from "express";
import website_router from "./routes/website_routes.ts";
import project_router from "./routes/project_routes.ts";
import tag_router from "./routes/tag_routes.ts";
import category_router from "./routes/category_routes.ts";

export const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/api', website_router)
app.use('/api', project_router)
app.use('/api', tag_router)
app.use('/api', category_router)

app.get('/', (req : Request, res: Response) => {
    res.send('Welcome To Power In Web Backend!');
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});