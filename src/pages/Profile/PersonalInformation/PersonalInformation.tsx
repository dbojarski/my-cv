import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { Label } from '../../../components/Label/Label';
import { Spinner } from '../../../components/Spinner/Spinner';
import {
  fetchPersonalInformation,
  Personal,
  selectPending,
  selectPersonalInformation,
  updatePersonalInformation,
} from '../../../store/profile';
import { selectUser } from '../../../store/user';
import {
  AboutMe,
  PersonalInfoFields,
  PersonalInformationForm,
  PersonalInformationHint,
} from './PersonalInformation.styles';

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
  } = useForm<Personal>({
    mode: 'onChange',
  });
  const pending = useSelector(selectPending);

  const onSavePersonalInformation = (data: Personal) => {
    dispatch(updatePersonalInformation({ ...data, uid }));
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
    <PersonalInformationForm onSubmit={handleSubmit(onSavePersonalInformation)}>
      <PersonalInformationHint>
        Your personal information is going to be used as a default value when
        generating your CV.
      </PersonalInformationHint>

      <PersonalInfoFields>
        <Input
          label='First name'
          placeholder='Your first name'
          error={errors.firstName}
          {...register('firstName', { required: 'This field is required' })}
        />

        <Input
          label='Last name'
          placeholder='Your last name'
          error={errors.lastName}
          {...register('lastName', { required: 'This field is required' })}
        />

        <Input
          label='Phone number'
          placeholder='Contact phone number'
          error={errors.phoneNumber}
          {...register('phoneNumber', { required: 'This field is required' })}
        />

        <Input
          label='Address'
          placeholder='Full address'
          error={errors.address}
          {...register('address')}
        />

        <AboutMe>
          <Label text='About me'>
            <textarea
              placeholder='Describe yourself'
              {...register('aboutMe')}
            />
          </Label>
        </AboutMe>
      </PersonalInfoFields>

      <div>
        <Button disabled={!isValid || savePending} type='submit'>
          Update your information
        </Button>
      </div>
    </PersonalInformationForm>
  );
}
