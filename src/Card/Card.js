import React, { Component } from 'react';
import './Card.css';

function Card(props) {
  return <section className="card">
    <h3>{props.name}</h3>
    <p>{props.date}</p>
    <p>{props.time}</p>
    <p>Number of guests: {props.number}</p>
    <button>Cancel</button>
  </section>
}

export default Card;
