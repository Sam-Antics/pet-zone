// Staff Buttons
function addStaffBtnHandler(event) {
  event.preventDefault();

  const form = document.querySelector('#add-staff-form');

  if (form.style.display === 'none') {
    // shows the form on button click
    form.style.display = 'block';
  } else {
    // hides form if showing
    form.style.display = 'none';
  }
}

function viewStaffBtnHandler(event) {
  event.preventDefault();

  const form = document.querySelector('#view-staff-form');

  if (form.style.display === 'none') {
    // shows the form on button click
    form.style.display = 'block';
  } else {
    // hides form if showing
    form.style.display = 'none';
  }
}

// Owner Buttons
function addOwnerBtnHandler(event) {
  event.preventDefault();

  const form = document.querySelector('#add-owner-form');

  if (form.style.display === 'none') {
    // shows the form on button click
    form.style.display = 'block';
  } else {
    // hides form if showing
    form.style.display = 'none';
  }
}

function viewOwnerBtnHandler(event) {
  event.preventDefault();

  const form = document.querySelector('#vw-owner-form');

  if (form.style.display === 'none') {
    // shows the form on button click
    form.style.display = 'block';
  } else {
    // hides form if showing
    form.style.display = 'none';
  }


}

// Pet Buttons
function addPetBtnHandler(event) {
  event.preventDefault();

  const form = document.querySelector('#add-pet-form');

  if (form.style.display === 'none') {
    // shows the form on button click
    form.style.display = 'block';
  } else {
    // hides form if showing
    form.style.display = 'none';
  }
}

function viewPetBtnHandler(event) {
  event.preventDefault();


  const form = document.querySelector('#vw-pet-form');

  if (form.style.display === 'none') {
    // shows the form on button click
    form.style.display = 'block';
  } else {
    // hides form if showing
    form.style.display = 'none';
  }
}

// Appointment Button
function setApptBtnHandler(event) {
  event.preventDefault();


  const form = document.querySelector('#add-appt-form');

  if (form.style.display === 'none') {
    // shows the form on button click
    form.style.display = 'block';
  } else {
    // hides form if showing
    form.style.display = 'none';
  }
}

document.querySelector('#add-staff').addEventListener('click', addStaffBtnHandler);
document.querySelector('#view-staff').addEventListener('click', viewStaffBtnHandler);

document.querySelector('#add-owner').addEventListener('click', addOwnerBtnHandler);
document.querySelector('#view-owner').addEventListener('click', viewOwnerBtnHandler);

document.querySelector('#add-pet').addEventListener('click', addPetBtnHandler);
document.querySelector('#view-pet').addEventListener('click', viewPetBtnHandler);

document.querySelector('#add-appt').addEventListener('click', setApptBtnHandler);