class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._src = data.src;
    this._text = data.text;
    this._currency = data.currency;
    this._number = data.number;
    this._weight = data.weight;
    this._templateSelector = templateSelector;
  };

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.products__cards-item')
    .cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._cardElement = this._getTemplate();
    this._productTitle = this._cardElement.querySelector('.products__title');
    this._productText = this._cardElement.querySelector('.products__text');
    this._productImage = this._cardElement.querySelector('.products__image-item');
    this._productPrice = this._cardElement.querySelector('.products__extra-price');
    this._productWeight = this._cardElement.querySelector('.products__extra-weight');
    this._productButton = this._cardElement.querySelector('.button_assignment_order');


    this._productTitle.textContent = this._name;
    this._productText.textContent = this._text;
    this._productImage.src = this._src;
    this._productImage.alt = `${this._name}`;
    this._productPrice.textContent = this._number + this._currency;
    this._productPrice.price = this._currency;
    this._productWeight.textContent = this._weight;

    this._productPrice.setAttribute('price', `${this._number}`);

    return this._cardElement;
  };

};

export {Card};

