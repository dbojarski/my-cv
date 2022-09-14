import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddSkill } from '../../../components/AddSkill/AddSkill';
import { Button } from '../../../components/Button/Button';
import { SkillBlock } from '../../../components/SkillBlock/SkillBlock';
import { fetchSkills } from '../../../store/profile';
import { selectSkills } from '../../../store/profile/profile.selector';
import { selectUser } from '../../../store/user/user.selector';
import {
  SkillsContainer,
  SkillsInformationHint,
  SkillsList,
} from './Skills.styles';

export function Skills() {
  const { uid } = useSelector(selectUser) as User;
  const dispatch = useDispatch();
  const skills = useSelector(selectSkills);
  const [addSkillVisible, setAddSkillVisibility] = useState(false);

  const hideSkillForm = () => setAddSkillVisibility(false);

  useEffect(() => {
    dispatch(fetchSkills(uid));
  }, []);

  return (
    <SkillsContainer>
      <SkillsInformationHint>
        All skills you add will be available to choose from a list when
        generating CV.
      </SkillsInformationHint>

      <SkillsList>
        {addSkillVisible && <AddSkill onCancel={hideSkillForm} />}

        {skills.map((skill) => (
          <SkillBlock skill={skill} key={skill.name} />
        ))}
      </SkillsList>

      <div>
        <Button
          disabled={addSkillVisible}
          onClick={() => setAddSkillVisibility(true)}
        >
          Add skill
        </Button>
      </div>
    </SkillsContainer>
  );
}
