import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddSkill } from '../../../components/AddSkill/AddSkill';
import { Button } from '../../../components/Button/Button';
import { Modal } from '../../../components/Modal/Modal';
import { SkillBlock } from '../../../components/SkillBlock/SkillBlock';
import { Spinner } from '../../../components/Spinner/Spinner';
import {
  fetchSkills,
  selectPending,
  selectSkills,
  Skill,
} from '../../../store/profile';
import { selectUser } from '../../../store/user';
import {
  SkillsContainer,
  SkillsInformationHint,
  SkillsList,
} from './Skills.styles';

export function Skills() {
  const { uid } = useSelector(selectUser) as User;
  const dispatch = useDispatch();
  const skills = useSelector(selectSkills);
  const [skillFormVisible, setSkillFormVisibility] = useState(false);
  const [focusedSkill, focusSkill] = useState<Skill>();
  const pending = useSelector(selectPending);

  const hideSkillForm = () => {
    focusSkill(undefined);
    setSkillFormVisibility(false);
  };

  const editSkill = (skill: Skill) => {
    focusSkill(skill);
    setSkillFormVisibility(true);
  };

  useEffect(() => {
    dispatch(fetchSkills(uid));
  }, []);

  useEffect(() => {
    setSkillFormVisibility(false);
    focusSkill(undefined);
  }, [skills]);

  if (pending) return <Spinner position='center' />;

  return (
    <SkillsContainer>
      <SkillsInformationHint>
        <p>
          All skills you add will be available to choose from a list when
          generating CV.
        </p>

        <Button
          disabled={skillFormVisible}
          onClick={() => setSkillFormVisibility(true)}
        >
          Add skill
        </Button>
      </SkillsInformationHint>

      <SkillsList>
        {skills.map((skill) => (
          <SkillBlock skill={skill} key={skill.name} onEdit={editSkill} />
        ))}
      </SkillsList>

      {skillFormVisible && (
        <Modal>
          <AddSkill skill={focusedSkill} onCancel={hideSkillForm} />
        </Modal>
      )}
    </SkillsContainer>
  );
}
