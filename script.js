// Get the navigation list element
const navList = document.getElementById("navlist");

// Store the offset top value
const stickyOffset = navList.offsetTop;

// Function to handle sticky navigation
function handleStickyNavigation() {
  if (window.scrollY >= stickyOffset) {
    navList.classList.add("sticky");
  } else {
    navList.classList.remove("sticky");
  }
}

// Add event listener with debouncing for performance
let timeoutId;
window.addEventListener("scroll", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(handleStickyNavigation, 10);
});


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navlist");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}