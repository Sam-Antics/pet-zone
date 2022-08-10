function goBack() {
    console.log('click')
    document.location.replace('/')
}
document.querySelector('.back').addEventListener('click', goBack);
