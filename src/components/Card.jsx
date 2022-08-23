import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      // isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.props;

    if (!cardTrunfo) return cardTrunfo || !cardTrunfo;

    return (
      <section>
        <h3 data-testid="name-card">
          { cardName }
        </h3>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />

        <p data-testid="description-card">
          { cardDescription }
        </p>

        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>

        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>

        <p data-testid="attr3-card">
          { cardAttr3 }
        </p>

        <p data-testid="rare-card">
          { cardRare }
        </p>

        <p data-testid="trunfo-card">
          { cardTrunfo }
          {' '}
          || Super Trunfo
        </p>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  // onInputChange: PropTypes.func.isRequired,
  // onSaveButtonClick: PropTypes.func.isRequired,
};
