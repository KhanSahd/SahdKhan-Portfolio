const psa = document.getElementById('PSA');
const psalist = document.getElementById('psainnerList')
const pfl = document.getElementById('PFL');
const pflList = document.getElementById('pflinnerList');
const odin = document.getElementById('odin');
const odinList = document.getElementById('odininnerList');

psa.addEventListener('click', function() {
    if (psalist.style.display === 'none'){
        psalist.style.display = 'block';
    } else {
        psalist.style.display = 'none';
    }
});

pfl.addEventListener('click', function(){
    if (pflList.style.display === 'none'){
        pflList.style.display = 'block';
    } else {
        pflList.style.display = 'none';
    }
});

odin.addEventListener('click', function(){
    if (odinList.style.display === 'none'){
        odinList.style.display = 'block';
    } else {
        odinList.style.display = 'none';
    }
});

const contact = document.getElementById('contact-button');
const menu = document.getElementById('contact-card');
const closeButton = document.getElementById('close-button');

contact.addEventListener('click', () => {
    menu.style.transform = 'translateX(500px)';
    menu.style.transition = 'all 1s ease-in-out';
    contact.style.transform = 'translateX(300px)';
    contact.style.transition = 'transform 1s ease-in-out';
});

closeButton.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
    contact.style.transform = 'translateX(0)';
});

