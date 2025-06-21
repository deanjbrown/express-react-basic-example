import express, { Express, Request, Response } from "express";
import env from "./utils/env";

// Create the express app
const app: Express = express();
const host = env.EXPRESS_HOST;
const port = env.EXPRESS_PORT;

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, World!" });
});

// Start listening on the specified port and host
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${host}:${port}`);
});
