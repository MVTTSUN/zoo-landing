document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const burgerMenu = document.getElementById('burgerMenu');
  const overlay = document.getElementById('overlay');
  const blur = document.getElementById('blur');
  const comment = document.querySelectorAll('.testimonials__li');
  const div = document.createElement('div');
  const exit = document.createElement('img');
  const divDesc = document.createElement('div');
  const divFlex = document.createElement('div');
  const divAvatar = document.createElement('img');
  const divStatus = document.createElement('div');
  const divName = document.createElement('div');
  const divLocal = document.createElement('div');
  const divText = document.createElement('div');

  divDesc.classList.toggle('border-gradient');
  div.classList.toggle('popup');

  exit.setAttribute('src', '../../assets/images/x_icon-popup.svg');
  exit.setAttribute('style', 'position: absolute; top: 12px; right: 10px;');
  div.setAttribute('style', 'width: 320px; height: 428px; background: #F5F7F6; position: relative; z-index: 5; padding: 20px 36px 17px 17px; box-shadow: -5px 0px 50px #000;');
  divDesc.setAttribute('style', 'background: #F1F3F2; border-radius: 20px; width: 267px; height: 391px; padding: 15px 14px 19px 16px; cursor: auto;');
  divFlex.setAttribute('style', 'display: flex; margin-bottom: 11px;');
  divAvatar.setAttribute('style', 'margin-right: 10px;');
  divStatus.setAttribute('style', '');
  divName.setAttribute('style', 'font-weight: 400; font-size: 16px; line-height: 120%; margin-bottom: 1px');
  divLocal.setAttribute('style', 'font-weight: 300; font-size: 15px; line-height: 120%; color: #BDBDBD;');
  divText.setAttribute('style', 'font-weight: 300; font-size: 15px; line-height: 120%; color: #767474; height: 308px; overflow: hidden;');

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

  if(document.documentElement.clientWidth <= 642) {
    comment.forEach(e => {
      e.addEventListener('click', target => {
        e.append(div);
        div.append(exit);
        div.append(divDesc);
        divDesc.append(divFlex);
        divDesc.append(divText);
        divFlex.append(divAvatar)
        divFlex.append(divStatus);
        divStatus.append(divName);
        divStatus.append(divLocal);
        divText.textContent = e.children[1].textContent;
        divAvatar.setAttribute('src', e.children[0].children[0].getAttribute('src'))
        divName.textContent = e.children[0].children[1].children[0].textContent;
        divLocal.textContent = e.children[0].children[1].children[1].textContent;
        if(target.target === exit || target.target === div) {
          div.remove();
        }
      });
    });
  }

  const next = document.querySelector('.grid-cards__arrow-right');
  const prev = document.querySelector('.grid-cards__arrow-left');

  let objectPets = {
    1: {
      image: {
        src: '../../assets/images/img-card1.png',
        alt: 'giant Panda'
      },
      name: 'giant Pandas',
      local: 'Native to Southwest China',
      icon: {
        src: '../../assets/images/banana-bamboo_icon.svg',
        alt: 'banana-bamboo'
      },
      iconSmall: 'assets/images/banana-bamboo_icon-640.svg'
    },
    2: {
      image: {
        src: '../../assets/images/img-card2.png',
        alt: 'Eagles'
      },
      name: 'Eagles',
      local: 'Native to South America',
      icon: {
        src: '../../assets/images/meet-fish_icon.svg',
        alt: 'meet-fish'
      },
      iconSmall: 'assets/images/meet-fish_icon-640.svg'
    },
    3: {
      image: {
        src: '../../assets/images/img-card3.png',
        alt: 'Gorillas'
      },
      name: 'Gorillas',
      local: 'Native to Congo',
      icon: {
        src: '../../assets/images/banana-bamboo_icon.svg',
        alt: 'banana-bamboo'
      },
      iconSmall: 'assets/images/banana-bamboo_icon-640.svg'
    },
    4: {
      image: {
        src: '../../assets/images/img-card4.png',
        alt: 'Two-toed Sloth'
      },
      name: 'Two-toed Sloth',
      local: 'Mesoamerica, South America',
      icon: {
        src: '../../assets/images/banana-bamboo_icon.svg',
        alt: 'banana-bamboo'
      },
      iconSmall: 'assets/images/banana-bamboo_icon-640.svg'
    },
    5: {
      image: {
        src: '../../assets/images/img-card5.png',
        alt: 'cheetahs'
      },
      name: 'cheetahs',
      local: 'Native to Africa',
      icon: {
        src: '../../assets/images/meet-fish_icon.svg',
        alt: 'meet-fish'
      },
      iconSmall: 'assets/images/meet-fish_icon-640.svg'
    },
    6: {
      image: {
        src: '../../assets/images/img-card6.png',
        alt: 'Penguins'
      },
      name: 'Penguins',
      local: 'Native to Antarctica',
      icon: {
        src: '../../assets/images/meet-fish_icon.svg',
        alt: 'meet-fish'
      },
      iconSmall: 'assets/images/meet-fish_icon-640.svg'
    }
  }

  function random(min, max, len) {
    let arr = []
    while(arr.length !== len) {
      let cnt = 0;
      let number = Math.floor(Math.random() * ((max + 1) - min)) + min;
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] === number) cnt++;
      }
      if(cnt === 0) {
        arr.push(number);
      }
    }
    return arr;
  }

  next.addEventListener('click', () => {
    const petCards = document.querySelectorAll('.grid-cards__li');
    const static = document.querySelector('.grid-cards__static');
    let cnt = 0;
    next.style.pointerEvents = 'none';

    static.style.display = 'flex';
    static.style.flexDirection = 'row-reverse';
    static.style.overflow = 'hidden';
    static.style.width = '200%';
    static.style.transform = 'translateX(-50%)';
    static.style.transition = 'transform 0.3s ease-out';

    if(window.innerWidth <= 950) {
      cnt = 4;
    } else cnt = 6;

    setTimeout(() => {
      static.children[1].remove();
      static.style.transition = 'transform 0s';
      static.style.transform = 'translateX(0)';
      static.style.width = '100%';
      next.style.pointerEvents = 'auto';
    }, 300)

    static.appendChild(static.children[0].cloneNode(true));

    let rand = random(1, 6, cnt);
    let redLine = 0;

    for(let i = 0; i < 6; i++) {
      if(getComputedStyle(petCards[i]).display === 'list-item') {
        petCards[i].children[0].setAttribute('style', 'background: #000');
        petCards[i].children[0].setAttribute('src', objectPets[rand[redLine]].image.src);
        petCards[i].children[0].setAttribute('alt', objectPets[rand[redLine]].image.alt);
        petCards[i].children[1].children[0].children[0].textContent = objectPets[rand[redLine]].name;
        petCards[i].children[1].children[0].children[1].textContent = objectPets[rand[redLine]].local;
        petCards[i].children[1].children[1].children[0].setAttribute('srcset', objectPets[rand[redLine]].iconSmall);
        petCards[i].children[1].children[1].children[1].setAttribute('src', objectPets[rand[redLine]].icon.src);
        petCards[i].children[1].children[1].children[1].setAttribute('alt', objectPets[rand[redLine]].icon.alt);
        redLine++;
      }
    }
  });

  prev.addEventListener('click', () => {
    const petCards = document.querySelectorAll('.grid-cards__li');
    const static = document.querySelector('.grid-cards__static');
    let cnt = 0;
    prev.style.pointerEvents = 'none';

    static.style.display = 'flex';
    static.style.flexDirection = 'row-reverse';
    static.style.overflow = 'hidden';
    static.style.width = '200%';
    static.style.transform = 'translateX(-50%)';
    static.style.transition = 'transform 0s';

    if(window.innerWidth <= 950) {
      cnt = 4;
    } else cnt = 6;

    setTimeout(() => {
      static.style.transition = 'transform 0.3s ease-out';
      static.style.transform = 'translateX(0)';
      setTimeout(() => {
        prev.style.pointerEvents = 'auto';
        static.style.width = '100%';
        static.children[0].remove();
      }, 299)
    }, 1)

    static.insertBefore(static.children[0].cloneNode(true), static.firstChild);

    let rand = random(1, 6, cnt);
    let redLine = 0;

    for(let i = 0; i < 6; i++) {
      if(getComputedStyle(petCards[i]).display === 'list-item') {
        petCards[i].children[0].setAttribute('style', 'background: #000');
        petCards[i].children[0].setAttribute('src', objectPets[rand[redLine]].image.src);
        petCards[i].children[0].setAttribute('alt', objectPets[rand[redLine]].image.alt);
        petCards[i].children[1].children[0].children[0].textContent = objectPets[rand[redLine]].name;
        petCards[i].children[1].children[0].children[1].textContent = objectPets[rand[redLine]].local;
        petCards[i].children[1].children[1].children[0].setAttribute('srcset', objectPets[rand[redLine]].iconSmall);
        petCards[i].children[1].children[1].children[1].setAttribute('src', objectPets[rand[redLine]].icon.src);
        petCards[i].children[1].children[1].children[1].setAttribute('alt', objectPets[rand[redLine]].icon.alt);
        redLine++;
      }
    }
  });
});

const testimonials = document.getElementById('testUl');
const range = document.querySelector('.testimonials__range');
const item = document.querySelector('.testimonials__li');
const gap = getComputedStyle(testimonials).gap.slice(0, 2);
let wid = item.offsetWidth + parseInt(gap) + 0.2;

function rangeThumb() {
  testimonials.style.transition = 'transform 0.3s ease-out';
  testimonials.style.transform = `translateX(-${wid*range.value}px)`;
}

testimonials.addEventListener('wheel', e => {
  e.preventDefault()
  if(e.deltaY > 0 && range.value < 8) {
    range.value++;
    testimonials.style.transition = 'transform 0.3s ease-out';
    testimonials.style.transform = `translateX(-${wid*range.value}px)`;
  } else if(e.deltaY < 0 && range.value >= 0) {
    range.value--;
    testimonials.style.transition = 'transform 0.3s ease-out';
    testimonials.style.transform = `translateX(-${wid*range.value}px)`;
  }
});