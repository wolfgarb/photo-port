import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
];
const mockCurrentCategory = jest.fn();
const mockSetCureentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCureentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCureentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // arrange
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCureentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    // arrange queries
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCureentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});
