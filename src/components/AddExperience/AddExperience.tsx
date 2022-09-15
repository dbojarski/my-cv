import { addMonths, subMonths } from 'date-fns';
import { User } from 'firebase/auth';
import { MouseEventHandler } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Experience, saveExperience } from '../../store/profile';
import { selectUser } from '../../store/user/user.selector';
import { Button, ButtonType } from '../Button/Button';
import { Datepicker } from '../Datepicker/Datepicker';
import { Input } from '../Input/Input';
import {
  AddExperienceActions,
  AddExperienceDates,
  AddExperienceForm,
} from './AddExperience.styles';

type AddSkillProps = {
  experience?: Experience;
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

export function AddExperience(props: AddSkillProps) {
  const { uid } = useSelector(selectUser) as User;
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<Experience>({ mode: 'onChange' });
  const [from, to] = watch(['from', 'to']);

  const onAddExperience = (data: Experience) =>
    dispatch(saveExperience({ ...data, uid }));

  return (
    <div>
      <h2>Add experience</h2>

      <AddExperienceForm
        autoComplete='off'
        onSubmit={handleSubmit(onAddExperience)}
      >
        <Input
          {...register('title', { required: 'This field is required' })}
          error={errors.title}
          label='Title'
          placeholder='Job title, position, project name, anything that defines your experience.'
        />

        <textarea
          {...register('description')}
          placeholder='Describe your experience, your responsibilities etc.'
        />

        <AddExperienceDates>
          <div>
            <Controller
              control={control}
              name='from'
              rules={{ required: true }}
              render={({ field }) => (
                <Datepicker
                  onChange={(date: Date) => field.onChange(date)}
                  selected={field.value}
                  maxDate={to && subMonths(to, 1)}
                  startDate={from}
                  endDate={to}
                  placeholderText='Start date of the experience'
                  label='Started in'
                />
              )}
            />
          </div>

          <div>
            <Controller
              control={control}
              name='to'
              rules={{ required: true }}
              render={({ field }) => (
                <Datepicker
                  onChange={(date: Date) => field.onChange(date)}
                  selected={field.value}
                  minDate={from && addMonths(from, 1)}
                  startDate={from}
                  endDate={to}
                  label='Ended in'
                  placeholderText='End date of the experience'
                />
              )}
            />
          </div>
        </AddExperienceDates>

        <AddExperienceActions>
          <Button
            buttonType={ButtonType.ghost}
            type='button'
            small
            onClick={props.onCancel}
          >
            Cancel
          </Button>

          <Button disabled={!isValid} type='submit' small>
            Save
          </Button>
        </AddExperienceActions>
      </AddExperienceForm>
    </div>
  );
}
