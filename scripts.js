document.addEventListener('DOMContentLoaded', function() {
    const countriesSelect = document.getElementById('countries');
    const priceRangeSelect = document.getElementById('price-range');
    const clothingCategorySelect = document.getElementById('clothing-category');
    const materialsSelect = document.getElementById('materials');
    const selectedFiltersContainer = document.getElementById('selected-filters');

    // Funkce pro přidání bubliny
    function addBubble(text) {
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');
        bubble.textContent = text;
        selectedFiltersContainer.appendChild(bubble);
    }

    // Funkce pro zpracování výběrů
    function updateFilters() {
        selectedFiltersContainer.innerHTML = ''; // Vyčistit předchozí bubliny

        // Přidat bubliny pro vybrané možnosti
        [...countriesSelect.selectedOptions].forEach(option => addBubble(option.text));
        [...priceRangeSelect.selectedOptions].forEach(option => addBubble(option.text));
        [...clothingCategorySelect.selectedOptions].forEach(option => addBubble(option.text));
        [...materialsSelect.selectedOptions].forEach(option => addBubble(option.text));
    }

    // Přidání posluchačů událostí na změnu výběru
    countriesSelect.addEventListener('change', updateFilters);
    priceRangeSelect.addEventListener('change', updateFilters);
    clothingCategorySelect.addEventListener('change', updateFilters);
    materialsSelect.addEventListener('change', updateFilters);
});
