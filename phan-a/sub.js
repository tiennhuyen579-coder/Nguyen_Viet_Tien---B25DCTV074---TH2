const body = document.body;
const hd = document.querySelector('site-header');
const bt = document.getElementById('bt');

bt.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (hd) {
        hd.classList.toggle('ac'); 
    }
})