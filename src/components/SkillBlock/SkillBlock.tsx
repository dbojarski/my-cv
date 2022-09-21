import { User } from 'firebase/auth';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteSkill, Skill } from '../../store/profile';
import { selectUser } from '../../store/user';
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
  onEdit: (skill: Skill) => void;
};

export function SkillBlockExperience({
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

export function SkillBlock({ skill, onEdit }: SkillBlockProps) {
  const dispatch = useDispatch();
  const { uid } = useSelector(selectUser) as User;

  const onDeleteSkill = useCallback(
    () => dispatch(deleteSkill({ name: skill.name, uid })),
    [uid]
  );

  return (
    <SkillBlockContainer>
      <SkillBlockHeader>
        <span title={skill.name}>{skill.name}</span>
        <SkillIconsContainer>
          <SkillEditIcon
            title={`Edit ${skill.name} skill`}
            onClick={() => onEdit(skill)}
          />
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
