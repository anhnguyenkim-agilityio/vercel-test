/** Class representing a product. */
export default class ProductEntity {
  /**
   * Create a product.
   * @param {number} data - The data contains of object product.
   */
  constructor(data) {
    this.productId = data.productId;
    this.name = data.name;
    this.price = data.price;
    this.amount = data.amount;
    this.imgURL = data.imgURL;
  }
}
