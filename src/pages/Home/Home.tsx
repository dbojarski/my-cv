import { usePDF } from '@react-pdf/renderer';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, ButtonType } from '../../components/Button/Button';
import { CV } from '../../components/CV/CV';
import { CVTemplate } from '../../components/CV/CV.constants';
import { Select } from '../../components/Select/Select';
import { Spinner } from '../../components/Spinner/Spinner';
import { Pages } from '../../constants/routes.constants';
import {
  ExperienceItem,
  fetchExperiences,
  fetchPersonalInformation,
  fetchSkills,
  Personal,
  selectExperiences,
  selectPending,
  selectPersonalInformation,
  selectSkills,
  Skill,
} from '../../store/profile';
import { selectUser } from '../../store/user';
import { isAnyFieldEmpty } from '../../utils/common.utils';
import { mapToOptions } from '../../utils/select/select.utils';
import { CVActions, CVButtons, CVWrapper, HomeContainer } from './Home.styles';

export function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser) as User;
  const experiences = useSelector(selectExperiences);
  const personal = useSelector(selectPersonalInformation) as Personal;
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

          {isAnyFieldEmpty(personal) && (
            <p>
              <Link to={Pages.profile}>Complete your personal data</Link> to
              include more information inside your CV.
            </p>
          )}

          <Select
            text='Skills'
            items={skillsOptions}
            onChange={filterSkills}
            disabled={!skillsOptions.length}
          />

          {!skillsOptions.length && (
            <p>
              You have not added any skills yet.{' '}
              <Link to={Pages.profileSkills}>Add skills</Link>
            </p>
          )}

          <Select
            text='Experience'
            items={experienceOptions}
            onChange={filterExperience}
            disabled={!experienceOptions.length}
          />

          {!experienceOptions.length && (
            <p>
              You have not added any experience yet.{' '}
              <Link to={Pages.profileExperience}>Add experience</Link>
            </p>
          )}

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
