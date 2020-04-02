import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from './Form'

describe("Form", () => {
let utils;

  beforeEach(() => {
    utils = render(
      <Form />
    )
  })

  it("Should have a name field", () => {
    const { getByPlaceholderText} = utils;
    const name = getByPlaceholderText("Name");

    expect(name).toBeInTheDocument();
  })

  it("Should have a date field", () => {
    const { getByPlaceholderText } = utils;
    const date = getByPlaceholderText("Date(mm/dd)");

    expect(date).toBeInTheDocument();
  })

  it("Should have a time field", () => {
    const { getByPlaceholderText } = utils;
    const time = getByPlaceholderText("Time");

    expect(time).toBeInTheDocument();
  })

  it("Should have a number of guests field", () => {
    const { getByPlaceholderText } = utils;
    const number = getByPlaceholderText("Number of guests");

    expect(number).toBeInTheDocument();
  })

  it("Should have a submit button", () => {
    const { getByText } = utils;
    const button = getByText("Make Reservation");

    expect(button).toBeInTheDocument();
  })

})
