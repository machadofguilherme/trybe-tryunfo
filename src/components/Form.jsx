import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea
            type="text"
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1.
          <input
            type="number"
            id="attr1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2.
          <input
            type="number"
            id="attr2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3.
          <input
            type="number"
            id="attr3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Imagem.
          <input
            type="text"
            id="image"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rarity">
          Raridade.
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          <input
            type="checkbox"
            name="super-trunfo"
            id="super-trunfo"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo.
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
