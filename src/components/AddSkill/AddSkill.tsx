import { User } from 'firebase/auth';
import { MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { saveSkill } from '../../store/profile';
import { selectUser } from '../../store/user/user.selector';
import { Button, ButtonType } from '../Button/Button';
import { SkillRate } from '../SkillRate/SkillRate';
import { TextField } from '../TextField/TextField';
import { AddSkillActions, AddSkillContainer } from './AddSkill.styles';

type FormValues = {
  name: string;
  experienceInMonths: number;
  rate: number;
};

type AddSkillProps = {
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

export function AddSkill(props: AddSkillProps) {
  const dispatch = useDispatch();
  const { uid: id } = useSelector(selectUser) as User;
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({ mode: 'onChange' });
  const onSaveSkill = (data: FormValues) =>
    dispatch(saveSkill({ ...data, id }));

  return (
    <AddSkillContainer onSubmit={handleSubmit(onSaveSkill)}>
      <TextField
        {...register('name', { required: true })}
        placeholder='Skill name'
      />

      <input
        type='number'
        min={1}
        {...register('experienceInMonths', { required: true, min: 1 })}
        placeholder='Experience in months'
      />

      <SkillRate {...register('rate')} />

      <AddSkillActions>
        <Button
          buttonType={ButtonType.ghost}
          small
          type='button'
          onClick={props.onCancel}
        >
          Cancel
        </Button>
        <Button type='submit' small disabled={!isValid}>
          Add
        </Button>
      </AddSkillActions>
    </AddSkillContainer>
  );
}
