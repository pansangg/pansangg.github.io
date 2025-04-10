(async () => {
    if (typeof jQuery === 'undefined') {
      await import('https://cdn.jsdelivr.net/jquery/latest/jquery.min.js');
    }

    $(document).ready(function() {
      $('#buttons').load('buttons.html');
      $('#webring').load('webring.html');
    });
  })();

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