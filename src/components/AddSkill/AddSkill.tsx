import { User } from 'firebase/auth';
import { MouseEventHandler, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { editSkill, saveSkill, selectSkills, Skill } from '../../store/profile';
import { selectUser } from '../../store/user';
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

  const onSaveSkill = useCallback(
    (data: FormValues) => {
      dispatch(
        props.skill ? editSkill({ ...data, uid }) : saveSkill({ ...data, uid })
      );
    },
    [uid, props.skill]
  );

  const isNameUnique = useCallback(
    (name: string) => {
      const nameIsUnique = !skills.map((skill) => skill.name).includes(name);

      if (props.skill) return;
      if (!nameIsUnique) return 'Name already in usage';
    },
    [skills, props.skill]
  );

  return (
    <div>
      <h2>Add skill</h2>
      <AddSkillForm autoComplete='off' onSubmit={handleSubmit(onSaveSkill)}>
        <Input
          {...register('name', {
            required: 'Field is required',
            validate: isNameUnique,
          })}
          error={errors.name}
          placeholder='What is the skill name?'
          label='Skill name'
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
          placeholder='How long is the experience?'
          label='Experience in months'
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
    </div>
  );
}
