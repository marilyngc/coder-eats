import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { dbConnection} from "./config/dbConnection.js";

import { usersRouter } from "./routes/users.routes.js";
import { businesRouter } from "./routes/business.routes.js";
import { ordersRouter } from "./routes/orders.routes.js";

const port = config.server.port;
const app = express();

app.use(express.json());
// para poder comunicar dos proyectos
app.use(cors());


app.listen(port,() => console.log(`server working on port ${port}`));
dbConnection();

//routes
app.use("/api/users",usersRouter);
app.use("/api/business",businesRouter);
app.use("/api/orders",ordersRouter);