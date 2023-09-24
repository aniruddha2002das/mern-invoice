import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/v1/test", function (req, res) {
  res.status(200).send({
    Hi: "Welcome to the Invoice App",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `${chalk.magenta.bold("✔")} 👍 Server running in ${chalk.magentaBright.bold(
      process.env.NODE_ENV
    )} mode on port ${chalk.blue.bold(PORT)}`
  );
});
