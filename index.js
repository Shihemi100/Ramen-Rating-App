// Data stub
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg"},
    {id: 4, name: "Tantanmen", restaurant: "Spicy Eats", image: "images/ramen.jpg", rating:5, comment:"No Words Can Describe!"}, 
    {id:5, name:"Shio Ramen", restaurant: "Only Ramen", image:"images/ramen(2).jpg", rating:4, comment:"Superb!"}  
];

// Function to display ramen images in #ramen-menu
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; // Clear existing content

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

// Function to handle clicking a ramen image and display details
function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.grtElementBYId("detail-image").alt = ramen.name;
    document.getElementById("detail-name").textContent = ramen.name || "Ramen Name";
    document.getElementById("detail-restaurant").textContent = ramen.restaurant || "Restaurant";
    document.getElementById("detail-rating").textContent = ramen.rating ? `Rating: ${ramen.rating}` : "Rating: N/A";
    document.getElementById("detail-comment").textContent = ramen.comment || "No comment";
}

// Function to handle form submission for adding new ramen
function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const newRamen = {
            id: ramens.length + 1, // Simple ID generation
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: `images/${document.getElementById("new-image").value}`, // Prepend images/ folder
            rating: parseInt(document.getElementById("new-rating").value) || undefined,
            comment: document.getElementById("new-comment").value || undefined
        };

        ramens.push(newRamen); // Add to array
        displayRamens(); // Refresh display
        form.reset(); // Clear form
    });
}

// Main function to initialize the app
function main() {
    displayRamens();
    addSubmitListener();
}
// Start from the first ramen
let currentIndex = 0; 

function startSlideshow() {
    if (ramens.length === 0) return; 

    setInterval(() => {
        const ramen = ramens[currentIndex]; 
        document.getElementById("detail-image").src = ramen.image;
        document.getElementById("detail-image").alt = ramen.name;
        document.getElementById("detail-name").textContent = ramen.name;
        document.getElementById("detail-restaurant").textContent = ramen.restaurant;
        document.getElementById("detail-rating").textContent = ramen.rating ? `Rating: ${ramen.rating}` : "Rating: N/A";
        document.getElementById("detail-comment").textContent = ramen.comment || "No comment";

        // Move to next ramen or loop back to the start
        currentIndex = (currentIndex + 1) % ramens.length;
    }, 3000); 
}

// Run slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
    addSubmitListener();
    startSlideshow(); 
});
// Ensure DOM is fully loaded before running main
document.addEventListener("DOMContentLoaded", main);