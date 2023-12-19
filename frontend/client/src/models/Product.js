class Product {
  constructor(
    {
      productId,
      productName,
      productDescription,
      category,
      price,
      imagePath,
    },

  ) {
    this.productId = productId;

    this.productName = productName;

    this.productDescription = productDescription;

    this.category = category;

    this.price = price;

    this.productStatus = 1;

    this.productsCount = 500;

    this.imagePath = imagePath;

    this.amount = 0;
  }
}

export default Product;
