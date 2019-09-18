// Hide Home button
document.querySelectorAll('[data-click="home_icon"]')[0].parentElement.style.display = "none";

// Disabled Fb icon
document.querySelectorAll('[data-click="bluebar_logo"] a')[0].removeAttribute("href");

// Redirect if fb home page
if(window.location.pathname == "/"){
    window.location.href = "https://www.facebook.com/messages/t/";
}