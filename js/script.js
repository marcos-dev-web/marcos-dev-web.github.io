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
  e.preventDefault()
})

setTimeout(() => {
  q('body').style = '-webkit-filter: blur(0);';
}, 3000)

const message = (msg) => {
  let span = document.createElement('span');
  span.style = `
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    z-index: 999;
    background: #00d2d3;
    color: white;
    font-family: sans-serif;
    text-align: center;
  `
  span.innerText = msg;
  q('body').appendChild(span)
  setTimeout(() => {
    span.style = "";
    span.style.display = "none";
  }, 2500)
}

const closeFullScreen = (e=null) => {
  if (e != null) {
    if (e.target.getAttribute('id') == 'form') {
      form_section.style = "";
      form_section.style.opacity = '1'
      header.style.display = "";
      q('body').style.position = 'static';
      footer.style = ""
      form_section.onclick = ""
    }
  }
}

const openFullScreen = () => {
  header.style.display = "none";
  q('body').style.position = 'relative'

  form_section.style.background = 'black'
  form_section.style.position = 'fixed'
  form_section.style.top = 0
  form_section.style.left = 0
  form_section.style.width = '100%'
  form_section.style.height = '100%';
  footer.style.display = "none";

}

const fullScreenForm = () => {
  openFullScreen()
  window.scroll(0,0);

  setTimeout(() => {
    message(`scroll page to exit full screen`)
    window.onscroll = (e) => {
      if (fullScreen) {
        closeFullScreen()
      } else {
        window.onscroll = ""
      }
      fullScreen = false;
    }
    form_section.onclick = closeFullScreen;
  }, 1000)
}

qa('[data-name="click"]').forEach((item) => {
  item.addEventListener('click', () => {
    if (!fullScreen) {
      fullScreen = true;
      fullScreenForm();
    }
  })
})