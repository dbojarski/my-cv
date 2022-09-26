import { render, screen, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import * as React from 'react';

import { Datepicker } from './Datepicker';

test('should display date in month-year format', () => {
  render(
    <Datepicker
      selected={DateTime.fromISO('2022-12-01').toJSDate()}
      onChange={() => {}}
    />
  );

  expect((screen.getByRole('textbox') as HTMLInputElement).value).toEqual(
    '12/2022'
  );
});

test('should call onChange prop function with date value', () => {
  const callback = jest.fn();

  render(
    <Datepicker
      selected={DateTime.fromISO('2022-12-01').toJSDate()}
      onChange={callback}
    />
  );

  const labelElement = screen.getByTestId('datepicker');

  fireEvent.click(labelElement);
  fireEvent.click(screen.getByText('Mar'));

  expect(callback).toHaveBeenCalledWith(expect.any(Date), expect.any(Object));
});
