const hero = document.querySelector('.hero');
const body = document.querySelector('.main');

//removes the styling from the main before rendering in the 404
hero.remove();
body.style.backgroundColor = "white";



//function to go back to the landing page but had to move it to return.js to get it to work
// function goBack() {
//     console.log('click')
//     document.location.replace('/')
// }
// document.querySelector('.back').addEventListener('click', goBack);
