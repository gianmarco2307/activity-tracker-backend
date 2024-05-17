const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");

const app = express();

// MIDDLEWARES

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

// ROUTERS

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

module.exports = app;
