import express from "express";

export const app = express();
const PORT = 3000;


app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});