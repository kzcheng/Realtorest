// Get all property elements
const properties = document.querySelectorAll('.property-container');
const itemsPerPage = 9;
let currentPage = 1;

// Function to show properties for the current page
function displayProperties() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    properties.forEach((property, index) => {
        if (index >= startIndex && index < endIndex) {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
}

// Function to update pagination links
function updatePagination() {
    const totalPages = Math.ceil(properties.length / itemsPerPage);
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    // Previous page link
    const prevPageElement = document.createElement('li');
    prevPageElement.classList.add('page-item');
    if (currentPage === 1) {
        prevPageElement.classList.add('disabled');
    }
    prevPageElement.innerHTML = `
        <a class="page-link" aria-label="Previous" onclick="prevPage()">
            <span aria-hidden="true">&laquo;</span>
        </a>
    `;
    paginationElement.appendChild(prevPageElement);

    // Sequential page links
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i >= 1 && i <= totalPages) {
            const pageElement = document.createElement('li');
            pageElement.classList.add('page-item');
            if (i === currentPage) {
                pageElement.classList.add('active');
            }
            pageElement.innerHTML = `
                <a class="page-link" onclick="goToPage(${i})">${i}</a>
            `;
            paginationElement.appendChild(pageElement);
        }
    }

    // Next page link
    const nextPageElement = document.createElement('li');
    nextPageElement.classList.add('page-item');
    if (currentPage === totalPages) {
        nextPageElement.classList.add('disabled');
    }
    nextPageElement.innerHTML = `
        <a class="page-link" aria-label="Next" onclick="nextPage()">
            <span aria-hidden="true">&raquo;</span>
        </a>
    `;
    paginationElement.appendChild(nextPageElement);
}

// Function to go to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProperties();
        updatePagination();
    }
}

// Function to go to the next page
function nextPage() {
    const totalPages = Math.ceil(properties.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProperties();
        updatePagination();
    }
}

// Function to go to a specific page
function goToPage(page) {
    currentPage = page;
    displayProperties();
    updatePagination();
}

// Initial display and pagination setup
displayProperties();
updatePagination();



function checkLoginStatus(button) {
    fetch('/check-login', {
        method: 'GET',
        credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            toggleFavourite(button);
        } else {
            window.location.href = '/login';
        }
    })
    .catch(error => console.error('Error:', error));
}


document.getElementById('favourite-button-${property.pid}').onclick = function() {
    checkLoginStatus(this);
};


function toggleFavourite(button) {
    var propertyId = button.getAttribute('data-pid');
    var iconElement = button.querySelector('i');


    if (iconElement.classList.contains('highlighted')) {
        // Remove from favourites
        iconElement.classList.remove('highlighted');
        removeFavourite(propertyId);
        localStorage.removeItem(propertyId); // Remove from local storage
    } else {
        // Add to favourites
        iconElement.classList.add('highlighted');
        addFavourite(propertyId);
        localStorage.setItem(propertyId, true); // Add to local storage
    }
}


window.onload = function() {
    var favouriteButtons = document.querySelectorAll('.favourite-button');
    favouriteButtons.forEach(function(button) {
        var propertyId = button.getAttribute('data-pid');
        if (localStorage.getItem(propertyId)) {
            button.querySelector('i').classList.add('highlighted');
        }
    });
};


function addFavourite(propertyId) {
    // Make AJAX POST request to add property to favourites
    fetch(`/add-favourite/${propertyId}`, {
        method: 'POST',
        credentials: 'include', // This is required to include the session cookie in the request
    })
    .then(response => response.text())
    .then(message => {
        console.log(message);
    })
    .catch(error => console.error('Error:', error));
}


function removeFavourite(propertyId) {
    // Make AJAX DELETE request to remove property from favourites
    fetch(`/remove-favourite/${propertyId}`, {
        method: 'DELETE',
        credentials: 'include', // This is required to include the session cookie in the request
    })
    .then(response => response.text())
    .then(message => {
        console.log(message);
    })
    .catch(error => console.error('Error:', error));
}
// Function to show the pop-up form
function showPopup() {
    var popup = document.getElementById('popup-form');
    popup.classList.add('active');
}


// Function to close the pop-up form
function closePopup() {
    var popup = document.getElementById('popup-form');
    popup.classList.remove('active');
}


setTimeout(showPopup, 120000); //Show popup after 2 minutes



// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent default form submission

// Get form data
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

// Validate form data (you may add more validation here)
if (name.trim() === '' || email.trim() === '' || phone.trim() === ''){
    alert("Please fill in all fields.");
    return;
}

// Send form data to backend
fetch('/submit-contact-form', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email, phone: phone})
})
.then(response => {
    if (response.ok) {
    // Form submission successful, do something (e.g., show a success message)
    alert("Thank you! Your information has been submitted.");
    // Optionally, close the modal after submission
    document.getElementById("popup-form").style.display = "none";
    } else {
    // Form submission failed, handle errors
    alert("Error: Form submission failed.");
    }
})
.catch(error => {
    // Handle network errors
    alert("Network error: Unable to submit form.");
});
});
