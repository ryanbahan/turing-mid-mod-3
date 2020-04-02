import React, { Component } from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import Form from '../Form/Form';
import './App.css';

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
    this.postNewReservation(card)
  }

  postNewReservation = (card) => {
    const data = JSON.stringify(card);

    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: data
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  handleDelete = (id) => {
    const updatedCards = this.state.cards.filter(card => card.id !== id);
    this.setState({cards: updatedCards});
    this.deleteReservation(id)
  }

  deleteReservation = (id) => {
    const data = JSON.stringify(id);

    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
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
