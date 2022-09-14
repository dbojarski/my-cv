import { User } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { deleteSkill, Skill } from '../../store/profile';
import { selectUser } from '../../store/user/user.selector';
import { SkillRateView } from '../SkillRateView/SkillRateView';
import {
  SkillBlockContainer,
  SkillDeleteIcon,
  SkillBlockHeader,
  SkillEditIcon,
  SkillIconsContainer,
} from './SkillBlock.styles';

type SkillBlockExperienceProps = {
  experienceInMonths: string;
};

type SkillBlockProps = {
  skill: Skill;
};

function SkillBlockExperience({
  experienceInMonths,
}: SkillBlockExperienceProps) {
  const experience = Number(experienceInMonths);
  const experienceDetails = [Math.floor(experience / 12), experience % 12];

  return (
    <small>
      {experienceDetails.map(
        (detail, index) => detail > 0 && ` ${detail}${index ? 'm' : 'y'}`
      )}
    </small>
  );
}

export function SkillBlock({ skill }: SkillBlockProps) {
  const dispatch = useDispatch();
  const { uid } = useSelector(selectUser) as User;

  const onDeleteSkill = () => dispatch(deleteSkill({ name: skill.name, uid }));

  return (
    <SkillBlockContainer>
      <SkillBlockHeader>
        {skill.name}
        <SkillIconsContainer>
          <SkillEditIcon title={`Edit ${skill.name} skill`} />
          <SkillDeleteIcon
            title={`Delete ${skill.name} skill`}
            onClick={onDeleteSkill}
          />
        </SkillIconsContainer>
        <SkillBlockExperience experienceInMonths={skill.experienceInMonths} />
      </SkillBlockHeader>

      <div>
        <SkillRateView rate={skill.rate} />
      </div>
    </SkillBlockContainer>
  );
}
