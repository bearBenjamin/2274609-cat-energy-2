/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav__list');
const navToggle = document.querySelector('.main-header__button');
const navToggleText = document.querySelector('.button-toggle__text');

mainNav.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav__list--close')) {
    mainNav.classList.remove('main-nav__list--close');
    mainNav.classList.add('main-nav__list--open');
    navToggle.classList.remove('main-header__button--close');
    navToggleText.textContent = 'Открыть меню';
  } else {
    mainNav.classList.add('main-nav__list--close');
    mainNav.classList.remove('main-nav__list--open');
    navToggle.classList.add('main-header__button--close');
    navToggleText.textContent = 'Закрыть меню';
  }
});
