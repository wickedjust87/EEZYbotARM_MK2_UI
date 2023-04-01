import express from 'express';
import ViteExpress from 'vite-express';

const app = express();

app.get("/base/increment", (_, res) => res.send("increment"));
app.get("/base/decrement", (_, res) => res.send("decrement"));

app.get("/shoulder/increment", (_, res) => res.send("increment"));
app.get("/shoulder/decrement", (_, res) => res.send("decrement"));

app.get("/elbow/increment", (_, res) => res.send("increment"));
app.get("/elbow/decrement", (_, res) => res.send("decrement"));

app.get("/grabber/increment", (_, res) => res.send("increment"));
app.get("/grabber/decrement", (_, res) => res.send("decrement"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
