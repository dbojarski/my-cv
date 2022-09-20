import { usePDF } from '@react-pdf/renderer';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ButtonType } from '../../components/Button/Button';
import { CV } from '../../components/CV/CV';
import { CVTemplate } from '../../components/CV/CV.constants';
import { Select } from '../../components/Select/Select';
import { Spinner } from '../../components/Spinner/Spinner';
import {
  ExperienceItem,
  fetchExperiences,
  fetchPersonalInformation,
  fetchSkills,
  PersonalInformation,
  selectExperiences,
  selectPending,
  selectPersonalInformation,
  selectSkills,
  Skill,
} from '../../store/profile';
import { selectUser } from '../../store/user';
import { mapToOptions } from '../../utils/select/select.utils';
import { CVActions, CVButtons, CVWrapper, HomeContainer } from './Home.styles';

export function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser) as User;
  const experiences = useSelector(selectExperiences);
  const personal = useSelector(
    selectPersonalInformation
  ) as PersonalInformation;
  const skills = useSelector(selectSkills);
  const skillsOptions = mapToOptions(skills, 'name', 'name');
  const experienceOptions = mapToOptions(experiences, 'title', 'title');
  const [chosenSkills, setChosenSkills] = useState<Skill[]>([]);
  const [chosenExperiences, setChosenExperiences] = useState<ExperienceItem[]>(
    []
  );
  const profileFetching = useSelector(selectPending);
  const [pdf, refreshPDF] = usePDF({
    document: CVTemplate({
      experience: chosenExperiences,
      user,
      personal,
      skills: chosenSkills,
    }),
  });

  useEffect(() => {
    refreshPDF();
  }, [personal]);

  const filterSkills = (skillNames: string[]) => {
    setChosenSkills(skills.filter((skill) => skillNames.includes(skill.name)));
  };

  const filterExperience = (experienceTitles: string[]) => {
    setChosenExperiences(
      experiences.filter((experience) =>
        experienceTitles.includes(experience.title)
      )
    );
  };

  useEffect(() => {
    dispatch(fetchSkills(user.uid));
    dispatch(fetchExperiences(user.uid));
    dispatch(fetchPersonalInformation(user.uid));
  }, []);

  if (profileFetching) return <Spinner position='center' />;

  return (
    <HomeContainer>
      <div>
        <CVActions>
          <span>
            Choose what skills and experiences should be included inside the CV
            you want to generate.
          </span>

          <Select text='Skills' items={skillsOptions} onChange={filterSkills} />

          <Select
            text='Experience'
            items={experienceOptions}
            onChange={filterExperience}
          />

          <CVButtons>
            <Button buttonType={ButtonType.ghost} onClick={refreshPDF}>
              Refresh Preview
            </Button>
            <a href={pdf.url as string} download='generated-cv'>
              Download CV
            </a>
          </CVButtons>
        </CVActions>
      </div>

      <CVWrapper>
        <CV pdf={pdf} />
      </CVWrapper>
    </HomeContainer>
  );
}
