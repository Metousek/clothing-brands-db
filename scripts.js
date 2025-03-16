function toggleDropdown(id) {
    let dropdown = document.getElementById(id);
    dropdown.classList.toggle("hidden");
}

document.querySelectorAll(".dropdown input").forEach(input => {
    input.addEventListener("change", function () {
        let selectedFilters = document.getElementById("selected-filters");
        let filterText = this.value;
        
        if (this.checked) {
            let filterBubble = document.createElement("span");
            filterBubble.className = "filter-bubble";
            filterBubble.innerText = filterText;
            filterBubble.dataset.value = filterText;

            filterBubble.addEventListener("click", function () {
                document.querySelector(`input[value="${this.dataset.value}"]`).checked = false;
                this.remove();
            });

            selectedFilters.appendChild(filterBubble);
        } else {
            document.querySelector(`.filter-bubble[data-value="${filterText}"]`)?.remove();
        }
    });
});
