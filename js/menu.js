const header_top = q('.profile__img');

$(window).bind('mousewheel', (e) => {
  if (e.originalEvent.wheelDelta >= 0) {
    header_top.style.top = '0';
  } else {
    header_top.style.top = '-100%';
  }
})
