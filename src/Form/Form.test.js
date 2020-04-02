import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from './Form'

describe("Form initial values", () => {
let utils;

  beforeEach(() => {
    utils = render(
      <Form />
    )
  })

  afterEach(() => {
    cleanup
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

describe("Form event testing", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Form handleSubmit={jest.fn()}/>
    )
  })

  afterEach(() => {
    cleanup
  })

  it("Should update name field on user input", () => {
    const { getByPlaceholderText } = utils;
    const name = getByPlaceholderText("Name");

    fireEvent.change(name, { target: { value: 'Tommy' } });

    expect(name.value).toBe("Tommy");
  })

  it("Should update date field on user input", () => {
    const { getByPlaceholderText } = utils;
    const date = getByPlaceholderText("Date(mm/dd)");

    fireEvent.change(date, { target: { value: '06/06/06' } });

    expect(date.value).toBe("06/06/06");
  })

  it("Should update time field on user input", () => {
    const { getByPlaceholderText } = utils;
    const time = getByPlaceholderText("Time");

    fireEvent.change(time, { target: { value: '6:66' } });

    expect(time.value).toBe("6:66");
  })

  it("Should update number of guests field on user input", () => {
    const { getByPlaceholderText } = utils;
    const number = getByPlaceholderText("Number of guests");

    fireEvent.change(number, { target: { value: '6' } });

    expect(number.value).toBe("6");
  })

  it("Should reset form on submission", () => {
    const { getByText, getByPlaceholderText } = utils;
    const name = getByPlaceholderText("Name");
    const date = getByPlaceholderText("Date(mm/dd)");
    const time = getByPlaceholderText("Time");
    const number = getByPlaceholderText("Number of guests");
    const submit = getByText("Make Reservation");

    fireEvent.click(submit);

    expect(name.value).toBe("");
    expect(date.value).toBe("");
    expect(time.value).toBe("");
    expect(number.value).toBe("0");
  })

})
