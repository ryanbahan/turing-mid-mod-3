import React from 'react';
import App from './App';
import Form from '../Form/Form';
import CardsContainer from '../CardsContainer/CardsContainer';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("App", () => {
let utils;

  beforeEach(() => {
    utils = render(
      <App />
    )
  })

  afterEach(() => {
    cleanup
  })

  it("Can display a new card on the page", () => {
    const { debug, getByPlaceholderText, getByText } = utils;
    const name = getByPlaceholderText("Name");
    const date = getByPlaceholderText("Date(mm/dd)");
    const time = getByPlaceholderText("Time");
    const number = getByPlaceholderText("Number of guests");
    const button = getByText("Make Reservation");

    fireEvent.change(name, { target: { value: 'Tommy' } });
    fireEvent.change(date, { target: { value: '06/06/06' } });
    fireEvent.change(time, { target: { value: '6:66' } });
    fireEvent.change(number, { target: { value: '6' } });
    fireEvent.click(button);

    const newCardName = getByText("Tommy");
    const newCardDate = getByText("06/06/06");
    const newCardTime = getByText("6:66");
    const newCardNumber = getByText("Number of guests: 6");

    expect(newCardName).toBeInTheDocument();
    expect(newCardDate).toBeInTheDocument();
    expect(newCardTime).toBeInTheDocument();
    expect(newCardNumber).toBeInTheDocument();
  })

})
