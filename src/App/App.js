import React, { Component } from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import Form from '../Form/Form';
import './App.css';
import { postNewReservation, deleteReservation } from '../utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations	")
    .then(res => res.json())
    .then(data => this.setState({cards: data}))
  }

  handleSubmit = (card) => {
    this.setState({cards: [...this.state.cards, card]})
    postNewReservation(card)
  }

  handleDelete = (id) => {
    const updatedCards = this.state.cards.filter(card => card.id !== id);
    this.setState({cards: updatedCards});
    deleteReservation(id)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className='resy-container'>
          <CardsContainer
            cards={this.state.cards}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default App;
