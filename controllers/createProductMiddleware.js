import { createProductSlug, generateMongoId } from "../helper/helper.js";
import fs from "fs";

// create a product
export const getAllProduct = (req, res) => {

    const productData = JSON.parse(
        fs.readFileSync("db/database.json").toString()
      );

  if (productData.length === 0) {
    res.status(404).json({ message: "Not Fountd Product Item" });
    return;
  }

  res.status(200).json({ product: productData });
};

// create a product item
export const createProductMiddleware = (req, res) => {
  const { name, regularPrice, salePrice, stock, productPhoto } = req.body;

  //   not empty any fields
  if (!name || !regularPrice) {
    res.status(400).json({ message: "Name and Regular Price Is Empty" });
    return;
  }

  //  create database width in json DB
  const productData = JSON.parse(
    fs.readFileSync("db/database.json").toString()
  );

  //  check product name llug
  if (productData.some((data) => data.slug === createProductSlug(name))) {
    res
      .status(400)
      .json({ message: "Product Slug Name All Ready Exesit ): ): ):" });
    return;
  }

  // product data strecure
  const product = {
    id: generateMongoId(),
    name,
    slug: createProductSlug(name),
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
