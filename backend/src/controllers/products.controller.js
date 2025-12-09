const Product = require("../models/products.model");

// Validation simple
function validate(product) {
  if (!product.name) return "name is required";
  if (isNaN(product.price) || product.price <= 0) return "price must be > 0";
  if (!Number.isInteger(product.stock) || product.stock < 0)
    return "stock must be integer ≥ 0";
  return null;
}

module.exports = {
  // GET /api/products
  async getAll(req, res) {
    try {
      const products = await Product.getAll();
      res.status(200).json(products);
    } catch (err) {
      console.error("getAll error:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // GET /api/products/:id
  async getById(req, res) {
    try {
      const product = await Product.getById(req.params.id);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json(product);
    } catch (err) {
      console.error("getById error:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // POST
  async create(req, res) {
    console.log("Create product request body:", req.body);
    try {
      const error = validate(req.body);
      if (error) {
        console.warn("Validation error:", error);
        return res.status(400).json({ error });
      }

      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      console.error("Create product error:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // PUT
  async update(req, res) {
    try {
      const product = await Product.getById(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });

      const error = validate(req.body);
      if (error) return res.status(400).json({ error });

      const updated = await Product.update(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (err) {
      console.error("Update product error:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // PATCH
  async patch(req, res) {
    try {
      const product = await Product.getById(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });

      await Product.patch(req.params.id, req.body);

      res.status(200).json({ message: "Product updated" });
    } catch (err) {
      console.error("Patch product error:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // DELETE
  async delete(req, res) {
    try {
      const product = await Product.getById(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });

      await Product.delete(req.params.id);

      res.status(204).send();
    } catch (err) {
      console.error("Delete product error:", err);
      res.status(500).json({ error: err.message });
    }
  },
};
