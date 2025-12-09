const db = require("../config/db");

class ProductModel {
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows[0];
  }

  static async create(product) {
    const { name, price, stock, category } = product;

    const [result] = await db.query(
      "INSERT INTO products (name, price, stock, category) VALUES (?, ?, ?, ?)",
      [name, price, stock, category]
    );

    return { id: result.insertId, ...product };
  }

  static async update(id, product) {
    const { name, price, stock, category } = product;

    await db.query(
      "UPDATE products SET name=?, price=?, stock=?, category=? WHERE id=?",
      [name, price, stock, category, id]
    );

    return { id, ...product };
  }

  static async patch(id, fields) {
    const keys = Object.keys(fields);
    const values = Object.values(fields);

    const setString = keys.map((key) => `${key} = ?`).join(", ");

    await db.query(`UPDATE products SET ${setString} WHERE id = ?`, [
      ...values,
      id,
    ]);
  }

  static async delete(id) {
    await db.query("DELETE FROM products WHERE id = ?", [id]);
  }
}

module.exports = ProductModel;
