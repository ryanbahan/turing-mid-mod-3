import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './Card'

describe("Card", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Card
        name="Timmy"
        date="04/04"
        time="1:30"
        number="5"
      />)
  })

  afterEach(() => {
    cleanup
  })

  it("Should have the correct name", () => {
    const { getByText } = utils;
    const name = getByText("Timmy");

    expect(name).toBeInTheDocument();
  })

  it("Should have the correct date", () => {
    const { getByText } = utils;
    const date = getByText("04/04");

    expect(date).toBeInTheDocument();
  })

  it("Should have the correct time", () => {
    const { getByText } = utils;
    const time = getByText("1:30");

    expect(time).toBeInTheDocument();
  })

  it("Should have the correct number of guests", () => {
    const { getByText } = utils;
    const number = getByText("Number of guests: 5");

    expect(number).toBeInTheDocument();
  })

  it("Should have a cancel button", () => {
    const { getByText } = utils;
    const cancel = getByText("Cancel");

    expect(cancel).toBeInTheDocument();
  })

})
