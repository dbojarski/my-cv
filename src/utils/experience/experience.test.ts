import { Timestamp } from 'firebase/firestore';
import { DateTime } from 'luxon';

import { ExperienceItem } from '../../store/profile';
import { convertExperienceToLocal } from './experience.utils';

test('should return empty experience model', () => {
  expect(convertExperienceToLocal(undefined)).toEqual({
    title: '',
    description: '',
    from: null,
    to: null,
  });
});

test('should return experience with converted dates', () => {
  const experience: ExperienceItem = {
    title: 'experience title',
    description: 'experience description',
    from: Timestamp.fromMillis(DateTime.fromISO('2022-12-01').toMillis()),
    to: Timestamp.fromMillis(DateTime.fromISO('2022-12-01').toMillis()),
  };

  expect(convertExperienceToLocal(experience)).toEqual({
    title: 'experience title',
    description: 'experience description',
    from: experience.from.toDate(),
    to: experience.to.toDate(),
  });
});
