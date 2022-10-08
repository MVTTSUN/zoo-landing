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
      e.addEventListener('click', () => {
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
      });
    });
  }
});