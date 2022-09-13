import { useState } from 'react';

import { AddSkill } from '../AddSkill/AddSkill';
import { Button } from '../Button/Button';
import { SkillsContainer, SkillsInformationHint } from './Skills.styles';

export function Skills() {
  const [addSkillVisible, setAddSkillVisibility] = useState(false);

  const hideSkillForm = () => setAddSkillVisibility(false);

  return (
    <SkillsContainer>
      <SkillsInformationHint>
        All skills you add will be available to choose from a list when
        generating CV.
      </SkillsInformationHint>

      {addSkillVisible && (
        <div>
          <AddSkill onCancel={hideSkillForm} />
        </div>
      )}
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
