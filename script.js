document.addEventListener('DOMContentLoaded', function() {
    const dash = document.querySelector('.dash');
    const navbar = document.querySelector('.navbar');

    dash.addEventListener('mouseover', () => {
        navbar.style.boxShadow = '0px 0px 20px #ffffff';
    });

    dash.addEventListener('mouseout', () => {
        navbar.style.boxShadow = '0px 0px 5px #ffffff';
    });
})