import { addMonths, subMonths } from 'date-fns';
import { User } from 'firebase/auth';
import { MouseEventHandler } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import {
  ExperienceItem,
  saveExperience,
  selectExperiences,
} from '../../store/profile';
import { selectUser } from '../../store/user';
import { convertExperienceToLocal } from '../../utils/experience/experience.utils';
import { Button, ButtonType } from '../Button/Button';
import { Datepicker } from '../Datepicker/Datepicker';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import {
  AddExperienceActions,
  AddExperienceDates,
  AddExperienceForm,
} from './AddExperience.styles';

type AddSkillProps = {
  experience?: ExperienceItem;
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

type FormValues<DateType = Date | null> = Pick<
  ExperienceItem,
  'title' | 'description'
> & {
  from: DateType;
  to: DateType;
};

export function AddExperience(props: AddSkillProps) {
  const experiences = useSelector(selectExperiences);
  const { uid } = useSelector(selectUser) as User;
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<FormValues>({
    defaultValues: convertExperienceToLocal(props.experience),
    mode: 'onChange',
  });
  const [from, to] = watch(['from', 'to']);

  const onAddExperience = (data: FormValues) =>
    dispatch(saveExperience({ ...(data as ExperienceItem<Date>), uid }));

  const isExperienceNameUnique = (name: string) => {
    const experienceIsUnique = !experiences
      .map((experience) => experience.title)
      .includes(name);

    if (props.experience) return;
    if (!experienceIsUnique) return 'Title already in usage';
  };

  return (
    <div>
      <h2>Add experience</h2>

      <AddExperienceForm
        autoComplete='off'
        onSubmit={handleSubmit(onAddExperience)}
      >
        <Input
          {...register('title', {
            required: 'This field is required',
            validate: isExperienceNameUnique,
          })}
          error={errors.title}
          disabled={!!props.experience}
          label='Title'
          placeholder='Job title, position, project name, anything that defines your experience.'
        />

        <Label text='Description'>
          <textarea
            {...register('description')}
            placeholder='Describe your experience, your responsibilities etc.'
          />
        </Label>

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
