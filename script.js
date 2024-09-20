// Sample data from a CSV file (for demonstration, you can load this data from a real CSV)
const products = [
    { name: "Organic Cotton T-shirt", fabric: "organic-cotton", price: 25, certification: "GOTS", image: "images/tshirt.jpg" },
    { name: "Organic Cotton T-shirt", fabric: "organic-cotton", price: 25, certification: "GOTS", image: "images/tshirt2.jpg" },
    { name: "Recycled Fabric Jacket", fabric: "recycled-fabric", price: 80, certification: "Fair Trade", image: "images/jacket.jpg" },
    { name: "Recycled Fabric Jacket", fabric: "recycled-fabric", price: 80, certification: "Fair Trade", image: "images/jacket2.jpg" },
    { name: "Fair Trade Accessories", fabric: "organic-cotton", price: 15, certification: "Fair Trade", image: "images/accessories.jpg" },
    { name: "Fair Trade Accessories", fabric: "organic-cotton", price: 15, certification: "Fair Trade", image: "images/accessories2.jpg" }
];

let users = []; // Array to store user data
let loggedInUser = null; // To track the logged-in user

// Function to display products
function displayProducts(filteredProducts) {
    const productListings = document.getElementById('product-listings');
    productListings.innerHTML = ''; // Clear previous products

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:200px;height:auto;">
            <h2>${product.name}</h2>
            <p>Fabric: ${product.fabric}</p>
            <p>Price: $${product.price}</p>
            <p>Certification: ${product.certification}</p>
        `;
        productListings.appendChild(productDiv);
    });
}

// Function to filter products based on search and filters
function searchProducts() {
    const searchBar = document.getElementById('search-bar').value.toLowerCase();
    const fabricType = document.getElementById('fabric-type').value;
    const priceRange = document.getElementById('price-range').value;

    const filteredProducts = products.filter(product => {
        return (product.name.toLowerCase().includes(searchBar) || product.fabric.includes(fabricType)) &&
               product.price <= priceRange;
    });

    displayProducts(filteredProducts);
}

// Initial display of products
displayProducts(products);
