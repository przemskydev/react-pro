import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/jest-dom';
import Header from './Header';

describe('Header test', () => {
  test('render properly', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>
    )
  })
})