const q = (e) => document.querySelector(e);
const qa = (e) => document.querySelectorAll(e);
var fullScreen = false;

const form = q('.form_box');
const header = q('.profile__img');
const footer = q('footer');
const form_section = q('.form');

form.addEventListener('submit', (e) => {
  let input_name = q('#name')
  let input_email = q('#email')

  if (input_email.value.length === 0 || input_name.value.length === 0) {
    e.preventDefault();
    alert('name or email is invalid!');
    input_name.value = "";
    input_email.value = "";
    return;
  }
  if (input_name.value.length < 3) {
    e.preventDefault();
    alert('name very short, min lenght is 3');
    input_name.value = "";
    return;
  }
  if (input_email.value.length > 254) {
    e.preventDefault()
    alert('email is invalid!');
    return;
  }
  if (input_email.value.length < 3) {
    e.preventDefault()
    alert('email is invalid');
    return;
  }
})
