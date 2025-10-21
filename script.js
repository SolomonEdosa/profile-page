// Function to update the time
function updateTime() {
    // 1. Get the current date and time object
    const currentTime = new Date();
    
    // 2. Define the options for formatting the time
    const options = {
        hour: '2-digit',      // Example: 02
        minute: '2-digit',    // Example: 01
        second: '2-digit',    // Example: 54
        hour12: true          // Use 12-hour clock (AM/PM)
    };
    
    // 3. Format the time into a readable string (e.g., 02:01:54 PM)
    // We use 'en-US' locale for the standard AM/PM format.
    const formattedTime = currentTime.toLocaleTimeString('en-US', options);
    
    // 4. Update the HTML element with the formatted time
    // The text on the card currently says 'Current time (sec):', but we'll use 'Current time:' for clarity
    document.getElementById('live-time').textContent = formattedTime;

    // OPTIONAL: Update the surrounding label in the HTML if you want to use the simpler 'Current time:'
    // You would need to add an ID to that <p> tag in your HTML to change it here.
}

// ----------------------------------------------------
// Run the code:

// 1. Run the function once immediately
updateTime();

// 2. Set an interval to run the updateTime function every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);
// Function to handle switching between the Home, About Me, and Contact Us pages
function showPage(pageId, linkElement) {
    // 1. Target all main content sections (using the class we added in HTML)
    const pages = document.querySelectorAll('.content-wrapper');
    
    // 2. Hide all pages
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // 3. Show the active page
    document.getElementById(pageId).style.display = 'block';

    // 4. Update active navigation link styling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    linkElement.classList.add('active');
}