(async () => {
    if (typeof jQuery === 'undefined') {
      console.log("xep2");
      await import('https://cdn.jsdelivr.net/jquery/latest/jquery.min.js');
      console.log("jQuery загружен");
    }

    $(document).ready(function() {
      console.log("xep");
      $('#buttons').load('buttons.html');
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