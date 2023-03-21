const arr = [];

const loadProducts = (url) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            arr.push(data);
            showProducts(data);
        });
};

loadProducts("https://fakestoreapi.com/products");

// show all product in UI
const showProducts = (products) => {
    setInnerText("total_products", products.length);

    document.getElementById("all-products").innerHTML = "";

    const allProducts = products.map((pd) => pd);
    for (const product of allProducts) {
        const image = product.image;
        // console.log(product);

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<div class="single-product">
      <div>
    <img class="product-image" src=${image}></img>
      </div>
      <h3>${product.title}</h3>
      <p>Category: ${product.category}</p>
      <h2>Price: $ ${product.price}</h2>

      <button onclick="showProductDetails(${product.id})" id="details-btn"    data-bs-toggle="modal"
      data-bs-target="#exampleModal" class="btn btn-outline-secondary mb-2 rounded-1 mt-1">Details</button>
      
      <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-success border-0 w-100 rounded-0 bg-main py-2">Add to cart</button>
      `;
        document.getElementById("all-products").appendChild(div);
    }
};
