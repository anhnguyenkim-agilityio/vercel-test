export const displayProduct = (products) => {
  let contentProduct = "";
  if (products.length > 0) {
    products.forEach((item) => {
      contentProduct += productTemplate(item);
    });
  }
  return contentProduct;
};

export const productTemplate = (product) => {
  const { productId, imgURL, name, price } = product;
  return `
  <article class="card-product">
  <img class="card-img" src="${imgURL}">
  <div class="card-body">
      <div class="card-content">
          <h3 class="product-name">${name}</h3>
          <p class="product-price">$${price}</p>
      </div>
      <button data-id=${productId} class="btn-card"> 
        <span class="border-circle"><span class="icon icon-bag"></span></span>
      </button>
  </div>
  </article>
  `;
};

// export const displayPagination = (countPage) => {
//   let paginationHTML = "";
//   paginationHTML += `<a href="#" class="icon icon-chervon-down-left icon-chervon-down-border"></a>`;
//   for (let number = 1; number <= countPage; number++) {
//     paginationHTML += `<a href="page=${number}&limit=${page_limit}" class="rounded">${number}</a>`;
//   }
//   paginationHTML += `<a href="#" class="icon icon-chervon-down-right icon-chervon-down-border"></a>`;
//   return paginationHTML;
// };
