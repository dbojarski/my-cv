import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { Spinner } from '../../../components/Spinner/Spinner';
import {
  fetchPersonalInformation,
  setPersonalInformation,
  selectPending,
  selectPersonalInformation,
} from '../../../store/profile';
import { selectUser } from '../../../store/user';
import {
  PersonalInformationForm,
  PersonalInformationHint,
} from './PersonalInformation.styles';

type FormValues = {
  firstName: string;
  lastName: string;
  aboutMe: string;
};

export function PersonalInformation() {
  const dispatch = useDispatch();
  const { uid } = useSelector(selectUser) as User;
  const personalInformation = useSelector(selectPersonalInformation);
  const savePending = useSelector(selectPending);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const pending = useSelector(selectPending);

  const updatePersonalInformation = (data: FormValues) => {
    dispatch(setPersonalInformation({ ...data, uid }));
  };

  useEffect(() => {
    dispatch(fetchPersonalInformation(uid));
  }, [uid]);

  useEffect(() => {
    if (!personalInformation) {
      return;
    }

    reset(personalInformation);
  }, [personalInformation]);

  if (pending) return <Spinner position='center' />;

  return (
    <PersonalInformationForm onSubmit={handleSubmit(updatePersonalInformation)}>
      <PersonalInformationHint>
        Your personal information is going to be used as a default value when
        generating your CV.
      </PersonalInformationHint>

      <div>
        <Input
          placeholder='Your first name'
          error={errors.firstName}
          {...register('firstName', { required: 'This field is required' })}
        />
      </div>

      <div>
        <Input
          placeholder='Your last name'
          error={errors.lastName}
          {...register('lastName', { required: 'This field is required' })}
        />
      </div>

      <div>
        <textarea placeholder='Describe yourself' {...register('aboutMe')} />
      </div>

      <div>
        <Button disabled={!isValid || savePending} type='submit'>
          Update your information
        </Button>
      </div>
    </PersonalInformationForm>
  );
}
