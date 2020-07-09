import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Component';


describe('Header component', () => {
  test('render element', () => {

    const placeholderTxt = "FirstName";

    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderTxt} name='name' label='name' />
    );

    expect(getByPlaceholderText(placeholderTxt)).toBeInTheDocument()
  });
  test('default props display', () => {
    const defaultProps = "Your value";
    const { getByPlaceholderText } = render(
      <Input name='name' label='name' />
    );
    expect(getByPlaceholderText(defaultProps)).toBeInTheDocument()

  });
  test('display proper value', () => {

    const { getByLabelText } = render(<Input name='name' label='name' />)

    expect(getByLabelText(/name/i)).toBeInTheDocument();

    fireEvent.change(getByLabelText(/name/i), { target: { value: 'Brzemeg' } })
    //{ target: { value: 'Brzemeg' } } === e.g. handleChange=(e)=>e.target.value
    expect(getByLabelText(/name/i)).toHaveValue('Brzemeg');

  });
  // test('display proper value', () => {

  //   const { getByLabelText } = render(<Input name='name' label='name' />)
  //   const inputTxt = getByLabelText(/name/i)

  //   fireEvent.change(inputTxt, { target: { value: 'Brzemeg123' } })

  //   expect(getByLabelText(/name/i)).toHaveValue('Brzemeg');

  // })
  test('show error when digits passed', () => {
    const { getByLabelText, container } = render(<Input name='name' label='name' />);

    const input = getByLabelText(/name/i);

    fireEvent.change(input, { target: { value: 'Brzemeg' } })
    expect(container).not.toHaveTextContent(/error/i);

    fireEvent.change(input, { target: { value: 'Brzemeg123' } })
    expect(container).toHaveTextContent(/error/i);

    fireEvent.change(input, { target: { value: 'Brzemeg' } })
    expect(container).not.toHaveTextContent(/error/i);
  })
})