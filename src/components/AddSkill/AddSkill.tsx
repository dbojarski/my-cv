import { MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';

import { Button, ButtonType } from '../Button/Button';
import { SkillRate } from '../SkillRate/SkillRate';
import { TextField } from '../TextField/TextField';
import { AddSkillActions, AddSkillContainer } from './AddSkill.styles';

type FormValues = {
  name: string;
  experience: number;
  rate: number;
};

type AddSkillProps = {
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

export function AddSkill(props: AddSkillProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const saveSkill = (data: FormValues) => {
    // TODO
  };

  return (
    <AddSkillContainer onSubmit={handleSubmit(saveSkill)}>
      <TextField
        {...register('name', { required: true })}
        placeholder='Skill name'
      />

      <input
        type='number'
        min={1}
        {...register('experience', { required: true, min: 1 })}
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
