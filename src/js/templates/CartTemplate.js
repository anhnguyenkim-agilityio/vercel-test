export const displayCart = (products) => {
  let contentCart = "";
  if (products.length > 0) {
    products.forEach((item) => {
      contentCart += cartTemplate(item);
      
      
    });
  }
  return `
  <table class="table">
    <thead>
      <tr class="col-header">
        <th class="col-product">PRODUCT</th>
        <th>PRICE</th>
        <th>QUANTITY</th>
        <th>SUBTOTAL</th>
      </tr>
    </thead>
    <tbody>
   ${contentCart}
      <tr class="col-btn">
        <td>
          <div class="btn-group">
            <button class="btn btn-return">Return to shop</button>
            <button class="btn btn-update-cart">Update Cart</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="cart-total">
  <p class="name-total">Cart Total</p>
  <p class="name-total-border"> Subtotal:<span>0$</span></p>
  <p class="name-total-border">Shipping:<span>Free</span></p>
  <p class="name-total-border-none total">Total:<span>0$</span></p>
  <button class="btn btn-checkout">Proceed to checkout</button>
</div>`;
};

export const cartTemplate = (product) => {
  const { id, productId, name, price, imgURL, amount } = product;
  const subtotal = price * amount;
  return `
  <tr class="col-tbody">
  <td>
    <div class="product-item">
      <img style="width:100px" src="${imgURL}" alt="${name}" />
      <p class="product-title"> ${name}</p>
    </div>
  </td>
  <td>${price}</td>
  <td>
    <div class="input-group quantity">
      <button class="btn btn-minus" data-id=${productId}><span class="icon icon-minus"></span></button>
      <input type="text" class="input-quantity" data-id=${productId} name="input-quantity" value=${amount}  />
      <button class="btn btn-plus" data-id=${productId}><span class="icon icon-plus"></span></button>
    </div>
  </td>
  <td>
    <p class="product-subtotal">${subtotal.toFixed(2)}$</p>
  </td>
  <td>
  <button class="btn btn-delete" data-id=${id}><span class="icon icon-close"></span></button>
  </td>
</tr>
`;
};
