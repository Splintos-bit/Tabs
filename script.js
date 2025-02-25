// Get all tabs and content sections
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

// Add click event listeners to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove the active class from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        // Add the active class to the clicked tab and corresponding content
        tab.classList.add('active');
        const activeTabContent = document.getElementById(tab.dataset.tab);
        activeTabContent.classList.add('active');
    });
});
