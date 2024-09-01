document.addEventListener("DOMContentLoaded", () => {
    const imageGallery = document.getElementById('imageGallery');
    
    const apiEndpoint = 'https://api.unsplash.com/photos/random?count=40'; // Fetch random images
    const apiKey = 'xg4c80uX_yPjlU1t-uYrIbntKMZcYXGkYl4aPFwBtSc'; // API key as a string

    fetch(apiEndpoint, {
        headers: {
            'Authorization': `Client-ID ${apiKey}`,
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('API response data:', data); // Log data for debugging
        data.forEach(image => {
            const imgElement = document.createElement('img');
            
            imgElement.src = image.urls.regular; // Use the 'regular' size for better quality
            imgElement.alt = image.alt_description || "Gallery Image";
            imgElement.style.width = '200px';  // Optional: Set image width for layout consistency
            imgElement.style.height = '200px'; // Optional: Set image height for layout consistency
            imgElement.style.objectFit = 'cover'; // Optional: Ensure the images fit nicely
            imageGallery.appendChild(imgElement);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
});
// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Night Mode Toggle
document.querySelector('.switch input').addEventListener('change', function () {
    document.body.classList.toggle('night-mode');
    document.body.classList.toggle('day-mode');
});
// Login Button Redirect
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-button');
  
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = 'login.html'; // Replace with your login page URL
        });
    } else {
        console.error('Login button not found');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const pageContent = document.getElementById('page-content');
    const animationContainer = document.getElementById('animation-container');

    // Function to handle the reload and animation
    function handlePageReload() {
        // Add class to hide the page content
        pageContent.classList.add('page-hidden');
        
        // Show the animation container
        animationContainer.style.display = 'flex';

        // Reload the page after animation duration
        setTimeout(() => {
            window.location.reload();
        }, 10); // Match this timeout with your animation duration
    }

    // Optionally trigger reload based on a specific action, e.g., button click
    document.getElementById('reload-button').addEventListener('click', handlePageReload);
});