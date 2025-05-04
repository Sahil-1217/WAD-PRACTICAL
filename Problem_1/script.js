const products = [
  {
    name: "Wireless Headphones",
    price: 7999,
    description: "Noise-cancelling overear headphones.",
    image:
      "https://images.unsplash.com/photo-1580894894513-ea7ff08e5e62?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Smartwatch",
    price: 12999,
    description: "Fitness tracking smartwatch.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Gaming Mouse",
    price: 2499,
    description: "Ergonomic gaming mouse.",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Laptop Stand",
    price: 1999,
    description: "Adjustable aluminium stand.",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Bluetooth Speaker",
    price: 3999,
    description: "Portable Bluetooth speaker.",
    image:
      "https://images.unsplash.com/photo-1594007653891-3d6d39a30dfc?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Laptop Sleeve",
    price: 1299,
    description: "Protective sleeve for laptops.",
    image:
      "https://images.unsplash.com/photo-1580927752452-89c08e70b65f?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Wireless Keyboard",
    price: 2499,
    description: "Bluetooth-enabled wireless keyboard.",
    image:
      "https://images.unsplash.com/photo-1587825140708-6a34f3f4d1e9?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Smartphone",
    price: 15999,
    description: "Latest model smartphone.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Wireless Charger",
    price: 1499,
    description: "Fast wireless charging pad.",
    image:
      "https://images.unsplash.com/photo-1612817157493-6091fefb0835?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "USB Flash Drive",
    price: 799,
    description: "16GB USB 3.0 flash drive.",
    image:
      "https://images.unsplash.com/photo-1587202372775-989b6c54b16e?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Laptop Bag",
    price: 2299,
    description: "Spacious laptop bag with compartments.",
    image:
      "https://images.unsplash.com/photo-1602526432604-d40f76d2473a?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Phone Case",
    price: 799,
    description: "Durable protective phone case.",
    image:
      "https://images.unsplash.com/photo-1589394813535-8c3a6ff8e38b?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Bluetooth Earbuds",
    price: 3499,
    description: "True wireless Bluetooth earbuds.",
    image:
      "https://images.unsplash.com/photo-1589380732047-f48f0f476f18?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "USB Flash Drive",
    price: 799,
    description: "16GB USB 3.0 flash drive.",
    image:
      "https://images.unsplash.com/photo-1587202372775-989b6c54b16e?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Laptop Bag",
    price: 2299,
    description: "Spacious laptop bag with compartments.",
    image:
      "https://images.unsplash.com/photo-1602526432604-d40f76d2473a?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Phone Case",
    price: 799,
    description: "Durable protective phone case.",
    image:
      "https://images.unsplash.com/photo-1589394813535-8c3a6ff8e38b?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Bluetooth Earbuds",
    price: 3499,
    description: "True wireless Bluetooth earbuds.",
    image:
      "https://images.unsplash.com/photo-1589380732047-f48f0f476f18?auto=format&fit=crop&w=80&q=80",
  },
];

let currentPage = 1;
const itemsPerPage = 10;
const totalPages = Math.ceil(products.length / itemsPerPage);

function displayProducts(page) {
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const productsToDisplay = products.slice(start, end);
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}"></td>
            <td>${product.name}</td>
            <td>₹${product.price}</td>
            <td>${product.description}</td>
        `;
    productList.appendChild(row);
  });

  document.getElementById(
    "page-number"
  ).textContent = `Page ${page} of ${totalPages}`;
  document.getElementById("prev-btn").disabled = page === 1;
  document.getElementById("next-btn").disabled = page === totalPages;
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(currentPage);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayProducts(currentPage);
  }
});

displayProducts(currentPage);
