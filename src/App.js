import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      onSaveButtonClick: [],
      changeBool: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const values = (type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: values,
    }, () => {
      const {
        cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
        cardImage, cardRare } = this.state;
      const number90 = 90;

      if (cardName && cardDescription && cardAttr1 && cardAttr2
        && cardAttr3 && cardImage && cardRare) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }

      this.checks(cardAttr1, cardAttr2, cardAttr3, number90);
    });
  }

  onSaveButtonClick(objeto) {
    this.setState((prevState) => ({
      onSaveButtonClick: [...prevState.onSaveButtonClick, objeto],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      changeBool: true,
    }));
  }

  checks(cardAttr1, cardAttr2, cardAttr3, number90) {
    const number210 = 210;

    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > number210) {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (cardAttr1 > number90 || cardAttr1 < 0) {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (cardAttr2 > number90 || cardAttr2 < 0) {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (cardAttr3 > number90 || cardAttr3 < 0) {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onSaveButtonClick, changeBool,
    } = this.state;

    return (
      <>
        <header>
          <h1>Adicionar nova carta.</h1>
        </header>

        <main className="side">
          <Form
            onInputChange={ this.handleChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ cardTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          {
            changeBool === true && onSaveButtonClick.map((cards) => (
              <Card
                key={ cards }
                { ...cards }
              />
            ))
          }
        </main>
      </>
    );
  }
}

export default App;
