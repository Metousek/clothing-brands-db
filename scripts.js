document.addEventListener('DOMContentLoaded', function() {
    // Funkce pro přidání vybraných filtrů do bublin
    document.querySelectorAll('select[multiple]').forEach(function(select) {
        select.addEventListener('change', function() {
            const selectedOptions = Array.from(this.selectedOptions).map(option => option.value);
            updateSelectedFilters(selectedOptions);
        });
    });

    function updateSelectedFilters(selectedOptions) {
        const selectedFiltersContainer = document.getElementById('selected-filters');
        selectedFiltersContainer.innerHTML = ''; // Vymaž předchozí bubliny

        selectedOptions.forEach(option => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.textContent = option;
            selectedFiltersContainer.appendChild(bubble);
        });
    }
});
