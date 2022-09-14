import { User } from 'firebase/auth';
import { MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { editSkill, saveSkill, Skill } from '../../store/profile';
import { selectSkills } from '../../store/profile/profile.selector';
import { selectUser } from '../../store/user/user.selector';
import { Button, ButtonType } from '../Button/Button';
import { Input } from '../Input/Input';
import { SkillRate } from '../SkillRate/SkillRate';
import { AddSkillActions, AddSkillForm } from './AddSkill.styles';

type FormValues = {
  name: string;
  experienceInMonths: string;
  rate: string;
};

type AddSkillProps = {
  skill?: Skill;
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

export function AddSkill(props: AddSkillProps) {
  const defaultValues: FormValues = props.skill || {
    name: '',
    experienceInMonths: '',
    rate: '',
  };
  const dispatch = useDispatch();
  const skills = useSelector(selectSkills);
  const { uid } = useSelector(selectUser) as User;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ defaultValues, mode: 'onChange' });

  const onSaveSkill = (data: FormValues) => {
    dispatch(
      props.skill ? editSkill({ ...data, uid }) : saveSkill({ ...data, uid })
    );
  };

  const isNameUnique = (name: string) => {
    const nameIsUnique = !skills.map((skill) => skill.name).includes(name);

    if (props.skill) return;
    if (!nameIsUnique) return 'Name already in usage';
  };

  return (
    <AddSkillForm autoComplete='off' onSubmit={handleSubmit(onSaveSkill)}>
      <Input
        {...register('name', {
          required: 'Field is required',
          validate: isNameUnique,
        })}
        error={errors.name}
        placeholder='Skill name'
        disabled={!!props.skill}
      />

      <Input
        error={errors.experienceInMonths}
        type='number'
        min={1}
        {...register('experienceInMonths', {
          required: 'Field is required',
          min: { value: 1, message: 'Minimal experience value is 1' },
        })}
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
    </AddSkillForm>
  );
}
