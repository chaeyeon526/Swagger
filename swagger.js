const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger.js");
const authRoutes = require("./routes/auth.js");

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버 실행중 http://localhost:${port}`);
  console.log(`Swagger 문서 보기 http://localhost:${port}/api-docs`);
});
