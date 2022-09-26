import { render, screen } from '@testing-library/react';

import { SkillRateView } from './SkillRateView';

test('should render exactly 5 bullet components', () => {
  render(<SkillRateView rate={'5'} />);

  expect(screen.getAllByTestId('rateViewBullet').length).toEqual(5);
});
