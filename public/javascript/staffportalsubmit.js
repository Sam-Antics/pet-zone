// PET FORMS
async function addPetFormhandler(event) {
 
  event.preventDefault();
  const name = document.querySelector('input[name="pet-name"]').value.trim();
  const type = document.querySelector('input[name="pet-type"]').value.trim();
  const breed = document.querySelector('input[name="pet-breed"]').value.trim();
  const age = document.querySelector('input[name="pet-age"]').value.trim();
  const color = document.querySelector('input[name="pet-color"]').value.trim();
  const owner_id = document.querySelector('input[name="pet-owner"]').value.trim();

  console.log(name, type, breed, age, color, owner_id)
  if (name && type && breed && age && color && owner_id) {
    const response = await fetch('/api/pets', {
      method: 'POST',
      body: JSON.stringify({
        name,
        type,
        breed,
        age,
        color,
        owner_id
      }),
      headers: { 'Content-Type': 'application/json' },
    });
   
    //   check response
    if (response.ok) {
      document.location.replace('/')
    } else {
      alert(response.statusText);
    }
  }
}



document.querySelector('#add-pet-form').addEventListener('submit', addPetFormhandler);