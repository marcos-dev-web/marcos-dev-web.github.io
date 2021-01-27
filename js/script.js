const form = document.querySelector('.form_box');

form.addEventListener('submit', (e) => {
  let input_name = document.querySelector('.name')
  let input_email = document.querySelector('.email')

  if (input_email.value.length === 0 || input_name.value.length === 0) {
    e.preventDefault();
    alert('name or email is invalid!');
    input_name.value = "";
    input_email.value = "";
  }
  if (input_name.value.length < 3) {
    e.preventDefault();
    alert('name very short, min lenght is 3');
    input_name.value = "";
  }
  if (input_email.value.length > 254) {
    e.preventDefault()
    alert('email is invalid!');
  }
  if (input_email.value.length < 3) {
    e.preventDefault()
    alert('email is invalid');
  }
})
