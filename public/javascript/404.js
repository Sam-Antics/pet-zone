const hero = document.querySelector('.hero');
const body = document.querySelector('.main');

hero.remove();
body.style.backgroundColor = "white";


function goBack() {
    console.log('click')
    document.location.replace('/')
}
document.querySelector('.back').addEventListener('click', goBack);
