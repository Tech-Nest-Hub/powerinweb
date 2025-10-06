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
import cron from "node-cron";


export const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://powerinweb.netlify.app",
      "https://powerinweb.onrender.com",
    ],
    credentials: true, // if using cookies/sessions
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

cron.schedule("*/10 * * * *", async () => {
  console.log("Pinging self to stay awake...");
  try {
    await fetch("https://powerinweb.onrender.com"); // 👈 replace with your actual backend URL
    console.log("Ping successful ✅");
  } catch (err) {
    console.error("Ping failed ❌", err);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});