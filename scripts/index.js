import {initialCards} from './data.js';
import {Card} from './Card.js';

//Переменная для создания сетки карточек
const productsList = document.querySelector('.products__cards');
//Переменная  заголовка сайта
const descriptionTitle = document.getElementsByClassName('description__title');
//Переменная для кнопки "Смотреть меню"
const descriptionButton = document.getElementById('view-menu');
//Переменная для всех ссылок в блоке header
const menuLinks = document.querySelectorAll('.header__menu-list-item > a');
//Пременная для кнопки "Заказать"
const productButton = document.getElementsByClassName('button_assignment_order');
//Переменные полей ввода данных
const inputBurger = document.getElementById('burger');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
//Переменная для кнопки "Оформить заказа"
const issueButton = document.querySelector('.button_assignment_issue');
//Переменная для кнопки "Изменить валюту"
const changeCurrency = document.getElementById('change-currency');
let prices = document.getElementsByClassName('products__extra-price');

//Функция создания карточки
const createProduct = (data) => {
  const card = new Card(data, '#product-template');

  return card.generateCard();
};

//Карточки в порядке массива
initialCards.forEach((productCard) => {
  productsList.append(createProduct(productCard));
});

//Изменение цвет заголовка сайта
descriptionTitle[0].style.color = '#FF0000';

//Слушатель события для кнопки "Смотреть меню"
descriptionButton.addEventListener('click', () => {
  document.getElementById('burger-menu').scrollIntoView({behavior: 'smooth'});
});

//Цикл для ссылок в блоке header
for (let i= 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', () => {
    document.getElementById(menuLinks[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
  });
  };

//Цикл для кнопок в меню бургеров
for (let i= 0; i < productButton.length; i++) {
  productButton[i].addEventListener('click', () => {
    document.getElementById('ordering').scrollIntoView({behavior: 'smooth'});
  });
  };

  //Cлушатель события для кнопки "Оформить заказ"
  issueButton.addEventListener('click', () => {
    let hasError = false;

    [inputBurger, inputName, inputPhone].forEach(element => {
      if (!element.value) {
        element.parentElement.style.background = '#FF0000';
        hasError = true;
      } else {
        element.parentElement.style.background = '';
      };
    });

    if (!hasError) {
      [inputBurger, inputName, inputPhone].forEach(element => {
        element.value = '';
      });
      alert('Спасибо за заказ! Мы скоро свяжемся с вами.');
    };
  });

  //Cлушатель события для кнопки "Изменить валюту"
  changeCurrency.addEventListener('click', (evt) => {
    let currentCurrency = evt.target.innerText;

    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency ==='$') {
      newCurrency = '₽';
      coefficient = 80;
    } else if (currentCurrency ==='₽') {
      newCurrency = 'BYN';
      coefficient = 3;
    } else if (currentCurrency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (currentCurrency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
  }

      evt.target.innerText = newCurrency;

      for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('price') * coefficient).toFixed(1) + '' + newCurrency;
      }
  });
