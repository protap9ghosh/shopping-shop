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
