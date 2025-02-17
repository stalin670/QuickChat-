import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

const PORT = 8000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
