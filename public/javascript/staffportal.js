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

// PET FORMS
function addPetFormhandler(event) {
  event.preventDefault();

  const petName = document.querySelector('#pet-name-input').value.trim();
  const petType = document.querySelector('#pet-type-input').value.trim();
  const petBreed = document.querySelector('#pet-breed-input').value.trim();
  const petAge = document.querySelector('#pet-age-input').value.trim();
  const petColor = document.querySelector('#pet-color-input').value.trim();
  const petOwner = document.querySelector('#pet-owner-input').value.trim();

  if (petName && petType && petBreed && petAge && petColor && petOwner) {
    console.log('You got it!');
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

document.querySelector('#add-staff').addEventListener('click', addStaffBtnHandler);
document.querySelector('#view-staff').addEventListener('click', viewStaffBtnHandler);

document.querySelector('#add-owner').addEventListener('click', addOwnerBtnHandler);
document.querySelector('#view-owner').addEventListener('click', viewOwnerBtnHandler);

document.querySelector('#add-pet').addEventListener('click', addPetBtnHandler);
document.querySelector('#add-pet-form').addEventListener('submit', addPetFormhandler);
document.querySelector('#view-pet').addEventListener('click', viewPetBtnHandler);

document.querySelector('#add-appt').addEventListener('click', setApptBtnHandler);