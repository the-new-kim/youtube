import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

const handleListening = () => {
  console.log(`http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
