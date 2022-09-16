import { ExperienceItem } from '../../store/profile';

export function convertExperienceToLocal(
  experience: ExperienceItem | undefined
): ExperienceItem<Date | null> {
  return experience
    ? {
        ...experience,
        from: experience.from.toDate(),
        to: experience.to.toDate(),
      }
    : {
        title: '',
        description: '',
        from: null,
        to: null,
      };
}
