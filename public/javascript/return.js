
// return button in the 404 page to return user to the landing page
function goBack() {
    console.log('click')
    document.location.replace('/')
}
document.querySelector('.back').addEventListener('click', goBack);
