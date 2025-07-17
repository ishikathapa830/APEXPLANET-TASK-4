const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    createTaskElement(taskText);
    saveTask(taskText);
    taskInput.value = "";
  }
}

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => {
    li.remove();
    removeTask(taskText);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    createTaskElement(task);
  });
}
loadTasks();

const products = [
  {
    name: "Dancing Girl Sketch",
    category: "Sketch",
    price: 499,
    rating: 4.6,
    image: "dance.jpeg"
  },
  {
    name: "Modern Art",
    category: "Sketch",
    price: 9999,
    rating: 4.8,
    image: "img 1.jpeg"
  },
  {
    name: "Lord Shiva",
    category: "Sketch",
    price: 499,
    rating: 4.3,
    image: "lord shiva.jpeg"
  },
  {
    name: "Portrait Sketch",
    category: "Sketch",
    price: 499,
    rating: 4.3,
    image: "random 1.jpeg"
  },
  {
    name: "Abstract Sketch",
    category: "Sketch",
    price: 1899,
    rating: 4.5,
    image: "random.jpeg"
  },
  {
    name: "Animal Sketch",
    category: "Sketch",
    price: 2499,
    rating: 4.2,
    image: "sketch.jpeg"
  },
  {
    name: "Nandi Sir Portrait",
    category: "Sketch",
    price: 2499,
    rating: 4.2,
    image: "nandi sir.jpeg"
  },
  {
    name: "Bookmarks Set A",
    category: "Bookmarks",
    price: 2499,
    rating: 4.2,
    image: "bookmarks 1.jpeg"
  },
  {
    name: "Bookmarks Set B",
    category: "Bookmarks",
    price: 2499,
    rating: 4.2,
    image: "bookmarks.jpeg"
  },
  {
    name: "Starry Night Canvas",
    category: "Canvas",
    price: 2499,
    rating: 4.2,
    image: "starrynight.jpeg"
  },
  {
    name: "Chess Canvas Art",
    category: "Canvas",
    price: 2499,
    rating: 4.2,
    image: "chess.jpeg"
  },
  {
    name: "Random Canvas",
    category: "Canvas",
    price: 2499,
    rating: 4.2,
    image: "random11.jpeg"
  },
  {
    name: "Shiva Canvas",
    category: "Canvas",
    price: 2499,
    rating: 4.2,
    image: "shiva.jpeg"
  }
];

function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Rating: ⭐ ${product.rating}</p>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  let filtered = category === "all"
    ? products
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  displayProducts(filtered);
}

function sortProducts() {
  const order = document.getElementById("sort").value;
  let sorted = [...products];
  sorted.sort((a, b) =>
    order === "asc" ? a.rating - b.rating : b.rating - a.rating
  );
  displayProducts(sorted);
}

function addToCart(productName) {
  alert(`${productName} added to cart! 🛒`);
}

displayProducts(products);
