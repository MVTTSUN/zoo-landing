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

  function random(min, max) {
    let arr = []
    while(arr.length !== max) {
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
    const container = document.querySelector('.grid-cards__ul');
    let cnt = 0;

    petCards.forEach(e => e.style.transform = 'translateX(-300px)');

    if(window.innerWidth <= 950) {
      cnt = 4;
    } else cnt = 6;

    setTimeout(() => {
      for(let i = 0; i < cnt; i++) {
        container.children[8].remove();
      }
    }, 2000)

    for(let i = 0; i < petCards.length; i++) {
      if(getComputedStyle(petCards[i]).display === 'list-item') {
        container.appendChild(petCards[i].cloneNode(true));
      }
    }

    console.log(petCards)

    let rand = random(1, cnt);

    for(let i = 0; i < cnt; i++) {
      if(getComputedStyle(petCards[i]).display === 'list-item') {
        petCards[i].style.transform = 'translateX(10000px)';
        petCards[i].children[0].setAttribute('style', 'background: #000');
        petCards[i].children[0].setAttribute('src', objectPets[rand[i]].image.src);
        petCards[i].children[0].setAttribute('alt', objectPets[rand[i]].image.alt);
        petCards[i].children[1].children[0].children[0].textContent = objectPets[rand[i]].name;
        petCards[i].children[1].children[0].children[1].textContent = objectPets[rand[i]].local;
        petCards[i].children[1].children[1].children[0].setAttribute('srcset', objectPets[rand[i]].iconSmall);
        petCards[i].children[1].children[1].children[1].setAttribute('src', objectPets[rand[i]].icon.src);
        petCards[i].children[1].children[1].children[1].setAttribute('alt', objectPets[rand[i]].icon.alt);
      }
    }

    container.style.gridTemplateColumns = 'repeat(6, minmax(210px, 1fr))';
  });
});