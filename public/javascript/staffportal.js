// STAFF BUTTONS
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

// OWNER BUTTONS
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

// PET BUTTONS
function addPetBtnHandler(event) {
  event.preventDefault();

  const form = document.querySelector('.add-pet-form');

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

// APPOINTMENT BUTTON
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


// Staff listeners
document.querySelector('#add-staff').addEventListener('click', addStaffBtnHandler);
document.querySelector('#view-staff').addEventListener('click', viewStaffBtnHandler);

// Owner listeners
document.querySelector('#add-owner').addEventListener('click', addOwnerBtnHandler);
document.querySelector('#view-owner').addEventListener('click', viewOwnerBtnHandler);

// Pet listeners
document.querySelector('#add-pet').addEventListener('click', addPetBtnHandler);
document.querySelector('#view-pet').addEventListener('click', viewPetBtnHandler);

// Appointment listener
document.querySelector('#add-appt').addEventListener('click', setApptBtnHandler);