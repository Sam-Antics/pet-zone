document.getElementById("nav-title").innerHTML = "StaffPortal";

async function loginFormHandler(event) {
    event.preventDefault();
    console.log('click')

    const staff_email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (staff_email && password) {
        const response = await fetch('/api/staff/login', {
            method: 'post',
            body: JSON.stringify({
                staff_email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            document.location.replace('/dashboard/');
            console.log('you are now logged in');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.staff-login-form').addEventListener('submit', loginFormHandler);