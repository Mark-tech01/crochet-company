
import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import requireAdmin from "../middleware/requireAdmin.js";

const router = express.Router();

// Validate product fields supplied in a request
function validateProductData(data, { partial = false } = {}) {
  const allowedFields = [
    "name",
    "slug",
    "description",
    "price",
    "category",
    "images",
    "stock",
    "status",
    "featured",
  ];

  const stringFields = ["name", "description", "category"];

  for (const key of Object.keys(data)) {
    if (!allowedFields.includes(key)) {
      return `Unknown field: ${key}`;
    }
  }

  if (!partial) {
    const requiredFields = [
      "name",
      "slug",
      "description",
      "price",
      "category",
    ];

    for (const field of requiredFields) {
      if (!Object.hasOwn(data, field)) {
        return `${field} is required`;
      }
    }
  }

  for (const field of stringFields) {
    if (
      Object.hasOwn(data, field) &&
      (typeof data[field] !== "string" || !data[field].trim())
    ) {
      return `${field} must be a non-empty string`;
    }
  }

  if (
    Object.hasOwn(data, "slug") &&
    (typeof data.slug !== "string" ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug))
  ) {
    return "Slug must contain lowercase letters, numbers, and hyphens";
  }

  if (
    Object.hasOwn(data, "price") &&
    (typeof data.price !== "number" ||
      !Number.isFinite(data.price) ||
      data.price < 0)
  ) {
    return "Price must be a non-negative number";
  }

  if (
    Object.hasOwn(data, "stock") &&
    (!Number.isInteger(data.stock) || data.stock < 0)
  ) {
    return "Stock must be a non-negative integer";
  }

  if (
    Object.hasOwn(data, "images") &&
    (!Array.isArray(data.images) ||
      !data.images.every(
        (image) => typeof image === "string" && image.trim().length > 0
      ))
  ) {
    return "Images must be an array of non-empty strings";
  }

  if (
    Object.hasOwn(data, "status") &&
    !["draft", "published"].includes(data.status)
  ) {
    return "Status must be draft or published";
  }

  if (
    Object.hasOwn(data, "featured") &&
    typeof data.featured !== "boolean"
  ) {
    return "Featured must be true or false";
  }

  return null;
}

// GET: Fetch all published products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ status: "published" })
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Fetch products failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
});

// GET: Fetch one published product by ID
router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findOne({
      _id: req.params.id,
      status: "published",
    }).lean();

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error("Fetch product failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
});

// POST: Create a product — admin only
router.post("/", requireAdmin, async (req, res) => {
  try {
    const errorMessage = validateProductData(req.body);

    if (errorMessage) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    const product = await Product.create({
      ...req.body,
      name: req.body.name.trim(),
      description: req.body.description.trim(),
      category: req.body.category.trim(),
      status: req.body.status ?? "draft",
      stock: req.body.stock ?? 0,
      images: req.body.images ?? [],
      featured: req.body.featured ?? false,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A product with this slug already exists",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Product validation failed",
      });
    }

    console.error("Create product failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
});

// PATCH: Update selected product fields — admin only
router.patch("/:id", requireAdmin, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const errorMessage = validateProductData(req.body, { partial: true });

    if (errorMessage) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide at least one field to update",
      });
    }

    const updates = { ...req.body };

    for (const field of ["name", "description", "category"]) {
      if (typeof updates[field] === "string") {
        updates[field] = updates[field].trim();
      }
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "That product slug is already in use",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Product validation failed",
      });
    }

    console.error("Update product failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
});

// DELETE: Delete a product — admin only
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete product failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
});

export default router;
