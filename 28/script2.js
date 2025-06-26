document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelectorAll('.details');

  details.forEach(element => {
    const summary = element.querySelector('.details__summary');
    const content = element.querySelector('.details__content');

    summary.addEventListener('click', e => {
      e.preventDefault();
      if (element.open) {
        const openDetails = content.animate(
          {
            opacity: [1, 0],
            height: [content.offsetHeight + 'px', 0],
          },
          {
            duration: 360,
            easing: 'ease-out',
          }
        );
        openDetails.onfinish = () => {
          element.removeAttribute('open');
        }
      } else {
        element.setAttribute('open', 'true');
        const openDetails = content.animate(
          {
            opacity: [0, 1],
            height: [0, content.offsetHeight + 'px'],
          },
          {
            duration: 360,
            easing: 'ease-out',
          }
        );
      }
    });
  });
});

TweenMax.staggerFromTo(".leRotateIn span", 1, {autoAlpha:0, rotation:-180, ease: Power0.easeNone}, {autoAlpha:1, rotation:0, ease: Power2.easeOut}, 0.2);