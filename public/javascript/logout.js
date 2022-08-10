async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok){
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}


function goBack() {
    console.log('click')
    document.location.replace('/')
}

document.querySelector('.back').addEventListener('click', goBack);
document.querySelector('#logout').addEventListener('click', logout);
