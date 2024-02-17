import { createProductSlug, generateMongoId } from "../helper/helper.js";
import fs from "fs";

// create a product
export const getAllProduct = (req, res) => {
  res.status(200).json({ message: "Get All Product" });
};

// create a product item
export const createProductMiddleware = (req, res) => {
  const { name, regularPrice, salePrice, stock, productPhoto } = req.body;

  const productData = JSON.parse(fs.readFileSync("db/database.json").toString());

  // product data strecure
  const product = {
    id: generateMongoId(),
    name,
    'slug': createProductSlug(name),
    regularPrice,
    salePrice,
    stock,
    productphoto: req.file.filename,
  };

  // data push
  productData.push(product);

  fs.writeFileSync("db/database.json", JSON.stringify(productData));

  res.status(200).json({
    product,
    productPhoto,
    message: "create Product Successfully",
  });
};
