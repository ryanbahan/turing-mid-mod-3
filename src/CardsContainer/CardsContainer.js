import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardsContainer.css';

class CardsContainer extends Component {
  displayCards() {
    return this.props.cards.map(card => {
      return <Card
                id={card.id}
                key={card.id}
                name={card.name}
                date={card.date}
                time={card.time}
                number={card.number}
              />
    })
  }

  render() {
    return (
      <div className="cards-container">
        {this.displayCards()}
      </div>
    )
  }
}

export default CardsContainer;
