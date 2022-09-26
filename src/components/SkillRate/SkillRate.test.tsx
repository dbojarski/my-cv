import { render, screen } from '@testing-library/react';

import { SkillRate } from './SkillRate';

test('should render exactly 5 bullets', () => {
  const eventHandler = () => new Promise<boolean>((resolve) => resolve(true));

  render(<SkillRate onChange={eventHandler} onBlur={eventHandler} name='' />);

  const skillBullets = screen.getAllByTestId('skill-rate-bullet');

  expect(skillBullets.length).toEqual(5);
});
