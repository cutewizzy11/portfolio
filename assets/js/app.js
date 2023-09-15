// JavaScript for mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navigation = document.querySelector(".navigation");

    mobileMenuToggle.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });
});
