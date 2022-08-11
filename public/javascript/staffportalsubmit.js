// PET FORMS
async function addPetFormhandler(event) {
    event.preventDefault();
  
    const petName = document.querySelector('input[name="pet-name"]').value.trim();
    const petType = document.querySelector('input[name="pet-type"]').value.trim();
    const petBreed = document.querySelector('input[name="pet-breed"]').value.trim();
    const petAge = document.querySelector('input[name="pet-age"]').value.trim();
    const petColor = document.querySelector('input[name="pet-color"]').value.trim();
    const petOwner = document.querySelector('input[name="pet-owner"]').value.trim();
  
    if (petName && petOwner ) {
      const response = await fetch('/api/pets', {
        method: 'post',
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
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }



document.querySelector('.add-pet-form').addEventListener('submit', addPetFormhandler);