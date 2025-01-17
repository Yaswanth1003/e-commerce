const products = {
  electronics: [
    {
      product: "Laptop",
      price: 65000,
      brand: "Dell",
      image: "laptop.png",
    },
    {
      product: "Smartphone",
      price: 45000,
      brand: "Samsung",
      image: "mobile.png",
    },
    { product: "Smartwatch", price: 15000, brand: "Apple", image: "watch.png" },
    { product: "Camera", price: 55000, brand: "Canon", image: "cam.png" },
    { product: "Headphones", price: 8000, brand: "Sony", image: "headset.png" },
    { product: "Tablet", price: 30000, brand: "Lenovo", image: "tablet.png" },
  ],
  clothes: [
    { product: "T-shirt", price: 1200, brand: "H&M", image: "tshirt.png" },
    { product: "Jeans", price: 2500, brand: "Levi's", image: "jeans.png" },
    { product: "Hoodie", price: 3000, brand: "Nike", image: "hoodie.png" },
    { product: "Jacket", price: 4500, brand: "Zara", image: "jacket.png" },
    {
      product: "Formal Shirt",
      price: 2000,
      brand: "Raymond",
      image: "formalshirt.png",
    },
    { product: "Skirt", price: 1800, brand: "Forever 21", image: "skirt.png" },
  ],
  footwear: [
    {
      product: "Running Shoes",
      price: 3500,
      brand: "Adidas",
      image: "runningshoes.png",
    },
    { product: "Flip-Flops", price: 800, brand: "Puma", image: "slides.png" },
    { product: "Boots", price: 4500, brand: "Woodland", image: "boots.png" },
    { product: "Sandals", price: 1200, brand: "Bata", image: "sandals.png" },
    { product: "Heels", price: 2500, brand: "Clarks", image: "heels.png" },
    {
      product: "Sneakers",
      price: 3000,
      brand: "Reebok",
      image: "sneakers.png",
    },
  ],
};

let container = document.querySelector(".container-u");

for (let category in products) {
  let h1 = document.createElement("h1");
  h1.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  h1.id = category;
  container.append(h1);

  let productdiv = document.createElement("div");
  productdiv.classList.add("products");

  products[category].forEach((ele) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.alt = ele.product;
    image.src = `pics/${ele.image}`;
    card.append(image);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = ele.product;
    cardBody.append(cardTitle);

    let brand = document.createElement("h5");
    brand.textContent = `Brand: ${ele.brand}`;
    cardBody.append(brand);

    let price = document.createElement("span");
    price.textContent = `₹${ele.price}`;
    cardBody.append(price);

    let addToCart = document.createElement("button");
    addToCart.textContent = "Add to Cart";
    cardBody.append(addToCart);

    card.append(cardBody);
    productdiv.append(card);
  });

  container.append(productdiv);
}
