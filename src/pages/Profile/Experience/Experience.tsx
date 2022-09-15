import { useState } from 'react';

import { AddExperience } from '../../../components/AddExperience/AddExperience';
import { Button } from '../../../components/Button/Button';
import { Modal } from '../../../components/Modal/Modal';
import {
  ExperienceContainer,
  ExperienceInformationHint,
  ExperienceItem,
  ExperienceItems,
  ExperienceDescription,
} from './Experience.styles';

export function Experience() {
  const [experienceFormVisible, setExperienceFormVisibility] = useState(false);
  const experiences = [
    {
      name: 'PGS Software: 4human',
      description: 'Some description',
    },
    {
      name: 'PGS Software: Foodback',
      description: 'Some description',
    },
    {
      name: 'PGS Software: Deloitte',
      description: 'Some description',
    },
  ];
  const [activeExperience, setActiveExperience] = useState<any>(experiences[0]);

  return (
    <ExperienceContainer>
      <ExperienceInformationHint>
        <p>
          Here you can find all your past and current responsibilities e.g.
          projects your were a part of.
        </p>
        <Button
          disabled={false}
          onClick={() => setExperienceFormVisibility(true)}
        >
          Add experience
        </Button>
      </ExperienceInformationHint>

      <ExperienceItems>
        <div>
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.name}
              className={
                activeExperience?.name === experience.name ? 'active' : ''
              }
              onClick={() => setActiveExperience(experience)}
            >
              {experience.name}
            </ExperienceItem>
          ))}
        </div>

        <ExperienceDescription>
          {activeExperience?.description}
        </ExperienceDescription>
      </ExperienceItems>

      {experienceFormVisible && (
        <Modal>
          <AddExperience onCancel={() => setExperienceFormVisibility(false)} />
        </Modal>
      )}
    </ExperienceContainer>
  );
}
