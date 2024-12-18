document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.details-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const destination = this.parentElement;
            const name = destination.getAttribute('data-name');
            const description = destination.getAttribute('data-description');
            alert(`Nama Destinasi: ${name}\nDeskripsi: ${description}`);
        });
    });
});