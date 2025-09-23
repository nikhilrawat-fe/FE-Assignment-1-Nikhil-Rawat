function init() {
    sidebarToggler();
}

function sidebarToggler() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.header__menu-icon');
    const closeButton = document.querySelector('.sidebar__close-icon');

    toggleButton.addEventListener('click', () => {
        toggleButton.style.display = 'none';
        sidebar.classList.toggle('sidebar--active');
        closeButton.focus();
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--active');
        toggleButton.style.display = 'block';
        toggleButton.focus();
    });

    toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleButton.style.display = 'none';
            sidebar.classList.toggle('sidebar--active');
            closeButton.focus();
        }
    });

    closeButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            sidebar.classList.remove('sidebar--active');
            toggleButton.style.display = 'block';
            toggleButton.focus();
        }
    });
}

init();
