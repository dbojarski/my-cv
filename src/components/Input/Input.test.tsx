import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldError } from 'react-hook-form';

import { Input } from './Input';

test('should render number input', () => {
  render(<Input type='number' />);

  expect(screen.getByRole('spinbutton')).toBeInTheDocument();
});

test.each(['a', 'e', 'E', '+', '-', '.'])(
  `should ignore typing special and not numeric characters`,
  async (character: string) => {
    render(<Input type='number' />);

    const inputElement = screen.getByRole('spinbutton') as HTMLInputElement;

    userEvent.type(inputElement, character);
    expect(inputElement.value).toEqual('');
  }
);

test('should render text input', () => {
  render(<Input />);

  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('should display error', () => {
  render(<Input error={{ message: 'Error message' } as FieldError} />);

  expect(screen.getByText('Error message')).toBeInTheDocument();
});
