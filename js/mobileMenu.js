dropArrow = document.getElementById("drop-arrow");
projectButton = document.getElementById("projects-button")
dropDownItems = document.getElementById("project-drop-down-items")


function projectDropDownClicked(event) {

    currentIcon = dropArrow.getAttribute("src");

    if (currentIcon === "images/drop-down-arrow.svg") {

        dropArrow.setAttribute("src", "images/drop-up-arrow.svg");
        dropDownItems.style.display = "block";

    }

    else {

        dropArrow.setAttribute("src", "images/drop-down-arrow.svg")
        dropDownItems.style.display = "none";
    }

}

projectButton.addEventListener('click', projectDropDownClicked);