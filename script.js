const breadcrumbsContainer = document.querySelector(".breadcrumbs");
const contentContainer = document.querySelector(".content");

breadcrumbsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        event.preventDefault();
        // Update breadcrumb trail and load corresponding content
        const clickedItem = event.target.textContent;
        updateBreadcrumbTrail(clickedItem);
        loadContent(clickedItem);
    }
});

function updateBreadcrumbTrail(clickedItem) {
    // Update breadcrumb trail here
    // You can add or remove breadcrumb links as needed
}

function loadContent(clickedItem) {
    // Load content related to the clicked item here
}
