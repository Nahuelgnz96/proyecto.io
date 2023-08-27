document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', toggleHideContent);
    });

    function toggleHideContent(event) {
        let card = event.target.closest('.card');
        let hiddenContent = card.querySelector('.hide');
        hiddenContent.classList.toggle('show');
    }
});
