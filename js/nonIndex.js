const mobileMenuButton = document.getElementById("menu-icon-button");
const mobileMenuIcon = document.getElementById("menu-icon");
const mobileMenuWindow = document.getElementById("mobile-menu-screen");
const defaultWindow = document.getElementById("default");
const darkeningEffect = document.getElementById("darkening-div")

function mobileMenuButtonClicked(event) {

    currentIcon = mobileMenuIcon.getAttribute("src");

    if (currentIcon === "../images/menu-icon.svg") {

        mobileMenuIcon.setAttribute("src", "../images/x-icon.svg")
        mobileMenuWindow.style.display = "block";
        mobileMenuWindow.style.animation = "MobileMenuSlideOut 0.3s forwards";
        darkeningEffect.style.display = "block";
        darkeningEffect.style.animation = "fadeInDarkening 0.3s forwards";

    }

    else {

        mobileMenuIcon.setAttribute("src", "../images/menu-icon.svg")
        mobileMenuWindow.style.animation = "MobileMenuSlideIn 0.3s forwards";
        darkeningEffect.style.animation = "fadeOutDarkening 0.3s forwards";
        darkeningEffect.style.display = "none";

    }

}


mobileMenuButton.addEventListener('click', mobileMenuButtonClicked);