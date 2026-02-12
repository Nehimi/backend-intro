import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'backend/static-files')));

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running successfully and http://localhost:${port}/static/random.html`);
    }
    else {
        console.log("Server running failed", error);
    }
})