const header_top = q('.profile__img');

$(window).bind('mousewheel', (e) => {
  if (e.originalEvent.wheelDelta >= 0) {
    header_top.style.transform = 'translateY(0)';
  } else {
    header_top.style.transform = 'translateY(-100%)';
  }
})
