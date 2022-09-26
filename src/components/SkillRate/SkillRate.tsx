import { forwardRef, Fragment, Ref } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

import {
  SkillRateBullet,
  SkillRateBulletLabel,
  SkillRateBulletsContainer,
  SkillRateContainer,
} from './SkillRate.styles';

export const SkillRate = forwardRef(
  (props: UseFormRegisterReturn, ref: Ref<HTMLInputElement>) => {
    const bullets = ['5', '4', '3', '2', '1'];

    return (
      <SkillRateContainer>
        <small>Rate your experience</small>

        <SkillRateBulletsContainer>
          {bullets.map((bullet) => (
            <Fragment key={bullet}>
              <SkillRateBullet
                {...props}
                ref={ref}
                type='radio'
                id={bullet}
                value={bullet}
                data-testid='skill-rate-bullet'
              />
              <SkillRateBulletLabel htmlFor={bullet} />
            </Fragment>
          ))}
        </SkillRateBulletsContainer>
      </SkillRateContainer>
    );
  }
);
