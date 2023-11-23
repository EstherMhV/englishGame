document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenuButton.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close the menu if a nav item is clicked (optional)
    const navItems = document.querySelectorAll('.nav-list a');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});
