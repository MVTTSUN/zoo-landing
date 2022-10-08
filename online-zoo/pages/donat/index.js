document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const burgerMenu = document.getElementById('burgerMenu');
  const overlay = document.getElementById('overlay');
  const blur = document.getElementById('blur');
  const donateBar = document.querySelectorAll('.donate__grid-price-el');
  const donateInput = document.getElementById('donateInput');

  donateBar.forEach(e => {
    let value = donateInput.value;
    if(e.children[1].textContent.trim() === value) {
      e.children[0].classList.toggle('donate__circle-active');
      e.children[1].children[0].classList.toggle('donate__dollar-active');
      e.children[1].setAttribute('style', 'color: #FE9013;');
    }
  });

  burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu-active');
    overlay.classList.toggle('overlay');
    blur.classList.toggle('blur');
  });

  overlay.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu-active');
    overlay.classList.toggle('overlay');
    blur.classList.toggle('blur');
  });

  let value = '';
  donateInput.addEventListener('input', () => {
    if(String(donateInput.value).length > 4) {
      donateInput.value = value;
    } else value = +donateInput.value;
    
    setTimeout(() => {
      let value = donateInput.value;
      donateBar.forEach(e => {
        e.children[0].classList.remove('donate__circle-active');
        e.children[1].children[0].classList.remove('donate__dollar-active');
        e.children[1].setAttribute('style', 'color: #333B41;');
      });
      donateBar.forEach(e => {
        if(e.children[1].textContent.trim() === value) {
          e.children[0].classList.toggle('donate__circle-active');
          e.children[1].children[0].classList.toggle('donate__dollar-active');
          e.children[1].setAttribute('style', 'color: #FE9013;');
        }
      })
    }, 1200);
  })

  donateBar.forEach(e => {
    e.addEventListener('click', () => {
      donateInput.value = '';

      donateBar.forEach(e => {
        e.children[0].classList.remove('donate__circle-active');
        e.children[1].children[0].classList.remove('donate__dollar-active');
        e.children[1].setAttribute('style', 'color: #333B41;');
      });

      donateInput.value = e.children[1].textContent.trim();;
      e.children[0].classList.toggle('donate__circle-active');
      e.children[1].children[0].classList.toggle('donate__dollar-active');
      e.children[1].setAttribute('style', 'color: #FE9013;');
    });
  });
});