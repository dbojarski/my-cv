import { render, screen } from '@testing-library/react';

import { Colors } from '../../assets/styles/Common.styles';
import { Button, ButtonType } from './Button';

test('renders Button with correct content', () => {
  render(<Button>my button</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.textContent).toEqual('my button');
});

test('passes props to button', () => {
  render(
    <Button buttonType={ButtonType.ghost} disabled={true}>
      my button
    </Button>
  );
});

test('should render custom button', () => {
  render(<Button />);
  expect(screen.getByRole('button')).toHaveStyle(
    `background-color: ${Colors.gold1}`
  );
});

test('should render ghost button', () => {
  render(<Button buttonType={ButtonType.ghost} />);
  expect(screen.getByRole('button')).toHaveStyle(
    'background-color: transparent'
  );
});
