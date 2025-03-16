function toggleDropdown(id) {
    let dropdown = document.getElementById(id);
    let isVisible = dropdown.style.display === 'flex';

    document.querySelectorAll('.dropdown').forEach(d => {
        d.style.display = 'none';
        d.style.opacity = '0';
        d.style.transform = 'translateY(-10px)';
    });

    if (!isVisible) {
        dropdown.style.display = 'flex';
        setTimeout(() => {
            dropdown.style.opacity = '1';
            dropdown.style.transform = 'translateY(0)';
        }, 10);
    }
}

function selectOption(element, category) {
    let text = element.innerText;
    let selectedFilters = document.getElementById('selected-filters');

    if (!element.classList.contains('selected')) {
        element.classList.add('selected');
        
        let bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = text + ' <button onclick="removeFilter(this, \'' + text + '\', \'' + category + '\')">x</button>';
        
        selectedFilters.appendChild(bubble);
    } else {
        removeFilter(null, text, category);
    }
}

function removeFilter(button, text, category) {
    let labels = document.querySelectorAll(`#${category}-dropdown label`);
    labels.forEach(label => {
        if (label.innerText === text) {
            label.classList.remove('selected');
        }
    });

    if (button) {
        button.parentElement.remove();
    } else {
        let bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            if (bubble.innerText.includes(text)) {
                bubble.remove();
            }
        });
    }
}
