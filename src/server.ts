import Express from "express";
import UserRoutes from "./routes/users";

const PORT = process.env.PORT;
const app = Express();

app.use(Express.json());

app.get("/", (_, res) => {
  res.send({ connected: true });
});

app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Running at ${PORT}`);
});
