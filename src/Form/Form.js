import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0
    }
  }

  updateFormString = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  updateFormNumber = (e) => {
    this.setState({[e.target.name]: parseInt(e.target.value)})
  }

  render() {
    return (
      <form>
      <input type="text" name="name" placeholder="Name" onChange={this.updateFormString} required />
      <input type="text" name="date" placeholder="Date(mm/dd)" onChange={this.updateFormString} required />
      <input type="text" name="time" placeholder="Time" onChange={this.updateFormString} required />
      <input type="number" name="number" placeholder="Number of guests" onChange={this.updateFormNumber} required />
      <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
