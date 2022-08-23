import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Adicionar nova carta.</h1>
        </header>

        <main className="side">
          <Form />
          <Card />
        </main>
      </>
    );
  }
}

export default App;
