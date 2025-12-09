require('dotenv').config();
const express = require("express");
const app = express();
const productsRoutes = require("./routes/products.routes");

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes Products
app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
