import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/index.js";
const app = express();

app.use(bodyParser.json());
app.use("/v1/shop", routes);
const dbUrl = process.env.DATABASE_URL;
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected succesfully");
  });

const port = process.env.PORT || 4045;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
