import { createProductSlug, generateMongoId } from "../helper/helper.js";
import fs from "fs";




// get all product showing here now
export const getAllProduct = (req, res) => {
  /**
   *  product parse showing
   * */
  const productData = JSON.parse(
    fs.readFileSync("db/database.json").toString()
  );

  /**
   *  product not showing
   * */
  if (productData.length === 0) {
    res.status(404).json({ message: "Not Fountd Product Item" });
    return;
  }

  /**
   *  get all product showing get router method
   * */
  res.status(200).json({ product: productData });
};









/**
 *  create a single product function
 * */
export const getSingleProduct = (req, res) => {
  /**
   * get params router data
   * */
  const { slug } = req.params;

  /**
   * got to database product find search
   * */
  const productData = JSON.parse(
    fs.readFileSync("db/database.json").toString()
  );

  /**
   * single product find to database
   * */
  const singleProduct = productData.find((data) => data.slug === slug);

  /**
   * single product not to database
   * */
  if (!singleProduct) {
    res.status(404).json({ message: "Single Product Not Found Is It Now" });
  }


  
  /**
   * req single data to database showing
   * */
  res.status(200).json(singleProduct);
};




/**
 * create a product item
 * */
export const createProductMiddleware = (req, res) => {
  const { name, regularPrice, salePrice, stock, productPhoto } = req.body;




  /**
   * not empty any fields
   * */
  if (!name || !regularPrice) {
    res.status(400).json({ message: "Name and Regular Price Is Empty" });
    return;
  }





  /**
   * create database width in json DB
   * */
  const productData = JSON.parse(
    fs.readFileSync("db/database.json").toString()
  );






  /**
   * check product name llug
   * */
  if (productData.some((data) => data.slug === createProductSlug(name))) {
    res
      .status(400)
      .json({ message: "Product Slug Name All Ready Exesit ): ): ):" });
    return;
  }







  /**
   * product data strecure
   * */
  const product = {
    id: generateMongoId(),
    name,
    slug: createProductSlug(name),
    regularPrice,
    salePrice,
    stock,
    productphoto: req.file.filename,
  };






  /**
   * product data push database
   * */
  productData.push(product);
  fs.writeFileSync("db/database.json", JSON.stringify(productData));








  /**
   * Product data responsive
   * */
  res.status(200).json({
    product,
    productPhoto,
    message: "create Product Successfully",
  });
};


/**
 *  delets a single product function
 * */
export const getDeleteProduct = (req, res) => {
    /**
     * get params router data
     * */
    const { id } = req.params;
  
    /**
     * got to database product find search
     * */
    const productData = JSON.parse(
      fs.readFileSync("db/database.json").toString()
    );
  
    /**
     * single product find to database
     * */
    const singleProduct = productData.filter((data) => data.id !== id);
        
    fs.writeFileSync("db/database.json", JSON.stringify(singleProduct));
    
    /**
     * req single data to database showing
     * */
    res.status(200).json({message: "Product Single Item Delete Successfully complete"});
  };
