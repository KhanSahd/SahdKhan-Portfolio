const psa = document.getElementById('PSA');
const psaList = document.getElementById('PSA-list')

psa.addEventListener('click', function() {
    if (psaList.style.display === 'none'){
        psaList.style.display = 'block';
    } else {
        psaList.style.display = 'none';
    }
    psaList.style.transition = 'all 2s ease-in';
});

alert('Hello Pimp')