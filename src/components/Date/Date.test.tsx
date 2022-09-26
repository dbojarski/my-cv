import { render, screen } from '@testing-library/react';
import { Timestamp } from 'firebase/firestore';
import { DateTime } from 'luxon';

import { Date } from './Date';

test('should render date by default in short format', () => {
  const dateInSeconds = DateTime.fromISO('2022-12-01').toSeconds();

  render(<Date timestamp={new Timestamp(dateInSeconds, 0)} />);

  expect(screen.getByText('12/1/2022')).toBeInTheDocument();
});
