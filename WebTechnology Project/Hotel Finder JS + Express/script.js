/**
 * Simple Hotel Booking Website - JavaScript Logic
 * This code demonstrates core JavaScript concepts for college submission.
 */

// --- Global Theme Toggle Logic ---
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Since themeToggle elements might exist on multiple pages, we add listeners
const toggles = document.querySelectorAll('.theme-toggle');
toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});


// --- 1. Variables and Data Types Concept ---
// let is used for variables that might change (like our current filtered list).
// const is used for variables that should not be re-assigned.
const hotelContainer = document.getElementById("hotelContainer");
const statusMessage = document.getElementById("statusMessage");

// --- Array of Objects Concept ---
// Storing our initial hotel data as an array of objects.
// Data Types: String (name, location), Number (id, price, rating).
const hotelsData = [
  { id: 1, name: "Taj Mahal Palace", price: 12000, rating: 4.9, location: "Mumbai" },
  { id: 2, name: "Himalayan Retreat", price: 4500, rating: 4.2, location: "Manali" },
  { id: 3, name: "Royal Heritage", price: 8000, rating: 4.5, location: "Jaipur" },
  { id: 4, name: "Goa Beach Resort", price: 6500, rating: 4.3, location: "Goa" },
  { id: 5, name: "Backwaters Lodge", price: 5000, rating: 4.6, location: "Kerala" },
  { id: 6, name: "City Center Suites", price: 3000, rating: 3.8, location: "Delhi" }
];

// --- 2. Realtime Feature (Window/Document object concept) ---
// setInterval executes a function repeatedly at a given interval (1000ms = 1 second).
setInterval(function() {
  const clockElement = document.getElementById("clock");
  const now = new Date(); // Date object concept 
  clockElement.innerHTML = "Current Time: " + now.toLocaleTimeString(); // DOM Manipulation
}, 1000);

// --- 3. Async JavaScript Concept (Promises) ---
// Simulating an asynchronous operation (like fetching data from a server)
// We use a Promise which resolves after a simulate delay (setTimeout).
function fetchHotelsAsync() {
  return new Promise((resolve, reject) => {
    // setTimeout simulates the network delay
    setTimeout(() => {
      // If we had an error, we would call reject(). Since this is hardcoded, we just resolve.
      resolve(hotelsData);
    }, 1500); // 1.5 second delay
  });
}

// --- 4. DOM Manipulation Concept (Rendering) ---
// Function to display hotels on the page.
function renderHotels(hotelsArray) {
  // Basic Memory Concept: Clear previous data before re-rendering.
  // This prevents memory bloat by removing unused DOM nodes.
  hotelContainer.innerHTML = "";

  // Conditional Statement (if/else concept)
  if (hotelsArray.length === 0) {
    statusMessage.innerHTML = "No hotels found matching your criteria.";
    statusMessage.style.display = "block";
  } else {
    statusMessage.style.display = "none";
    
    // Loops Concept (forEach)
    // Iterating over the array to create a card for each hotel object.
    hotelsArray.forEach(function(hotel) {
      // Creating element using DOM manipulation
      const card = document.createElement("div");
      card.className = "hotel-card"; // Assigning CSS class
      
      // Building the inner structure using innerHTML
      card.innerHTML = `
        <div class="hotel-info">
          <h2 class="hotel-name">${hotel.name}</h2>
          <p class="hotel-location">📍 ${hotel.location}</p>
          <p class="hotel-rating">⭐ ${hotel.rating} / 5</p>
          <p class="hotel-price">Rs. ${hotel.price} per night</p>
          <button class="book-btn" data-id="${hotel.id}">Book Now</button>
        </div>
      `;
      // Appending the created card to our main container
      hotelContainer.appendChild(card);
    });

    // After adding cards, we must attach event listeners to the newly created buttons.
    attachBookingEvents();
  }
}

// --- 5. Events and Booking Navigation Concept ---
function attachBookingEvents() {
  const bookButtons = document.querySelectorAll(".book-btn");
  
  // Loops Concept (for loop)
  for (let i = 0; i < bookButtons.length; i++) {
    bookButtons[i].addEventListener("click", function(event) {
      // Get the clicked hotel ID
      const hotelId = event.target.getAttribute("data-id");
      
      // Store the clicked hotel's details in local storage for easy access on the next page
      const selectedHotel = hotelsData.find(h => h.id == hotelId);
      if (selectedHotel) {
        localStorage.setItem("selectedHotel", JSON.stringify(selectedHotel));
      }
      
      // Navigate to the new page using clean URLs
      window.location.href = `/checkout?id=${hotelId}`;
    });
  }
}

// --- 7. Search, Filter & Sort Concept ---
function filterAndSortHotels() {
  // Get values from input fields
  const searchTerm = document.getElementById("searchInput").value.toLowerCase(); // String method toLowerCase
  const maxPrice = document.getElementById("maxPriceInput").value;
  const minRating = document.getElementById("minRatingSelect").value;
  const sortBy = document.getElementById("sortSelect").value;

  // Use Array manipulation methods (filter)
  let result = hotelsData.filter(function(hotel) {
    // String methods (includes) and Logical Operators (&&, ||)
    let matchesSearch = hotel.name.toLowerCase().includes(searchTerm) || 
                        hotel.location.toLowerCase().includes(searchTerm);
    
    // Comparison Operators (<=, >=)
    // If input is empty, ignore it (treat as very high max limit)
    let limitPrice = maxPrice === "" ? 999999 : Number(maxPrice);
    let matchesPrice = hotel.price <= limitPrice;

    let matchesRating = hotel.rating >= Number(minRating);

    // Boolean Logic
    return matchesSearch && matchesPrice && matchesRating;
  });

  // Use Array manipulation methods (sort)
  if (sortBy === "priceLowHigh") {
    // Sorting algorithm comparing a and b
    result.sort(function(a, b) {
      return a.price - b.price;
    });
  } else if (sortBy === "priceHighLow") {
    result.sort(function(a, b) {
      return b.price - a.price;
    });
  }

  // Re-render the filtered and sorted list
  renderHotels(result);
}

// Attach Search/Filter Events safely (Only on Home Page)
if (document.getElementById("searchInput")) {
  document.getElementById("searchInput").addEventListener("input", filterAndSortHotels);
  document.getElementById("maxPriceInput").addEventListener("input", filterAndSortHotels);
  document.getElementById("minRatingSelect").addEventListener("change", filterAndSortHotels);
  document.getElementById("sortSelect").addEventListener("change", filterAndSortHotels);
  document.getElementById("applyFiltersBtn").addEventListener("click", filterAndSortHotels);
}

// --- 8. Initialization (Start sequence) ---
if (document.getElementById("hotelContainer")) {
  console.log("App Started. Requesting hotel data...");
  // Promise consumption using .then (Async behavior)
  fetchHotelsAsync().then((data) => {
    console.log("Data received asynchronously!");
    renderHotels(data);
  });
}

// --- 9. Booking Page Logic ---
if (document.getElementById("bookingForm")) {
  const hotelNameDisplay = document.getElementById("hotelNameDisplay");
  const hotelPriceDisplay = document.getElementById("hotelPriceDisplay");
  const bookingForm = document.getElementById("bookingForm");

  // Extract 'id' parameter from the window location URL.
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get("id");

  // Retrieve hotel info from localStorage
  const storedHotelJSON = localStorage.getItem("selectedHotel");

  if (storedHotelJSON) {
    const hotel = JSON.parse(storedHotelJSON);
    hotelNameDisplay.innerHTML = `Booking: ${hotel.name}`;
    hotelPriceDisplay.innerHTML = `Price: Rs. ${hotel.price} per night`;
  } else {
    hotelNameDisplay.innerHTML = "Hotel Not Found";
    alert("Error loading hotel details. Please return to the home page.");
  }

  // Event Handling (Form Submission)
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;

    let dateIn = new Date(checkIn);
    let dateOut = new Date(checkOut);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateIn < today) {
      alert("Invalid Date: Check-In date cannot be in the past.");
      return; 
    }

    if (dateIn >= dateOut) {
      alert("Invalid Date: Check-Out must be at least one day AFTER Check-In.");
      return; 
    }

    let finalBooking = {
      hotelId: hotelId,
      name: userName,
      checkIn: checkIn,
      checkOut: checkOut
    };

    localStorage.setItem("latestBooking", JSON.stringify(finalBooking));

    alert(`Successfully Booked!\nName: ${userName}\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}\n\nRedirecting to Home Page...`);
    window.location.href = "/";
  });
}
