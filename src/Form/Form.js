import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.clearForm();
  }

  clearForm() {
    this.setState({id: Date.now(), name: "", date: "", time: "", number: 0})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.updateFormString} required />
      <input type="text" name="date" placeholder="Date(mm/dd)" value={this.state.date} onChange={this.updateFormString} required />
      <input type="text" name="time" placeholder="Time" value={this.state.time} onChange={this.updateFormString} required />
      <input type="number" name="number" placeholder="Number of guests" value={this.state.number} onChange={this.updateFormNumber} required />
      <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
