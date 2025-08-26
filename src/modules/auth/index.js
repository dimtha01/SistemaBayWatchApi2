import authRouter from "./router/auth.routes.js";

export default function authRoutes(app) {
  app.use("/api/auth", authRouter);
}
