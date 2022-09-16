import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddExperience } from '../../../components/AddExperience/AddExperience';
import { Button } from '../../../components/Button/Button';
import { Date } from '../../../components/Date/Date';
import { Modal } from '../../../components/Modal/Modal';
import { MONTH_YEAR } from '../../../constants/date.constants';
import {
  deleteExperience,
  ExperienceItem,
  fetchExperiences,
  selectExperiences,
} from '../../../store/profile';
import { selectUser } from '../../../store/user';
import {
  ExperienceContainer,
  ExperienceInformationHint,
  ExperienceListItem,
  ExperienceList,
  ExperienceDescription,
  ExperienceDetails,
  ExperienceIconsContainer,
  ExperienceEditIcon,
  ExperienceDeleteIcon,
} from './Experience.styles';

export function Experience() {
  const dispatch = useDispatch();
  const { uid } = useSelector(selectUser) as User;
  const [experienceFormVisible, setExperienceFormVisibility] = useState(false);
  const experiences = useSelector(selectExperiences);
  const [activeExperience, setActiveExperience] = useState<ExperienceItem>();
  const [editMode, setEditMode] = useState(false);

  const onDeleteExperience = () =>
    dispatch(deleteExperience({ ...activeExperience, uid }));

  const onEditExperience = () => {
    setEditMode(true);
    setExperienceFormVisibility(true);
  };

  const onExperienceModalClose = () => {
    setExperienceFormVisibility(false);
    setEditMode(false);
  };

  useEffect(() => {
    dispatch(fetchExperiences(uid));
  }, []);

  useEffect(() => {
    const experienceToSelect =
      experiences.find((item) => item.title === activeExperience?.title) ||
      experiences[0];

    setExperienceFormVisibility(false);
    setActiveExperience(experienceToSelect);
  }, [experiences]);

  return (
    <ExperienceContainer>
      <ExperienceInformationHint>
        <p>
          Here you can find all your past and current responsibilities e.g.
          projects your were a part of.
        </p>
        <Button onClick={() => setExperienceFormVisibility(true)}>
          Add experience
        </Button>
      </ExperienceInformationHint>

      <ExperienceList>
        <div>
          {experiences.map((experience) => (
            <ExperienceListItem
              key={experience.title}
              className={
                activeExperience?.title === experience.title ? 'active' : ''
              }
              onClick={() => setActiveExperience(experience)}
            >
              {experience.title}
            </ExperienceListItem>
          ))}
        </div>

        {activeExperience && (
          <ExperienceDetails>
            <div>
              <Date timestamp={activeExperience.from} format={MONTH_YEAR} /> -
              <Date timestamp={activeExperience.to} format={MONTH_YEAR} />
            </div>

            <ExperienceIconsContainer>
              <ExperienceEditIcon
                title='Edit experience'
                onClick={onEditExperience}
              />
              <ExperienceDeleteIcon
                title='Delete experience'
                onClick={onDeleteExperience}
              />
            </ExperienceIconsContainer>

            <ExperienceDescription>
              {activeExperience.description}
            </ExperienceDescription>
          </ExperienceDetails>
        )}
      </ExperienceList>

      {experienceFormVisible && (
        <Modal>
          <AddExperience
            experience={editMode ? activeExperience : undefined}
            onCancel={onExperienceModalClose}
          />
        </Modal>
      )}
    </ExperienceContainer>
  );
}
