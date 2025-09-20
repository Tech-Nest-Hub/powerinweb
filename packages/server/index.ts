import express, { type Request, type Response } from "express";
import website_router from "./routes/website_routes.ts";
import project_router from "./routes/project_routes.ts";
import tag_router from "./routes/tag_routes.ts";
import category_router from "./routes/category_routes.ts";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";


export const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(
  cors({
    origin: "https://powerinweb.netlify.app",
  })
);


// Needed since you’re using ESM (ts with module: "esnext")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());

app.use('/api', website_router)
app.use('/api', project_router)
app.use('/api', tag_router)
app.use('/api', category_router)

app.get('/', (req : Request, res: Response) => {
    res.send('Welcome To Power In Web Backend!');
})


app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});