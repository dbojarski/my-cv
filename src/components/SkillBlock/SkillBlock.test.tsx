import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { deleteSkill } from '../../store/profile';
import {
  RenderWithProvider,
  testStore,
} from '../../utils/testing/testing.utils';
import { SkillBlock } from './SkillBlock';

const skill = { name: 'test', rate: '5', experienceInMonths: '13' };

test('should call given function on edit action', () => {
  const callback = jest.fn();

  render(
    <RenderWithProvider>
      <SkillBlock skill={skill} onEdit={callback} />
    </RenderWithProvider>
  );

  const triggerElement = screen.getByTitle('Edit test skill');

  userEvent.click(triggerElement);
  expect(callback).toBeCalled();
});

test('should dispatch deleteSkill action on delete trigger', () => {
  render(
    <RenderWithProvider>
      <SkillBlock skill={skill} onEdit={() => {}} />
    </RenderWithProvider>
  );

  const triggerElement = screen.getByTitle('Delete test skill');

  userEvent.click(triggerElement);
  expect(testStore.getActions()[0]).toEqual(
    deleteSkill({ name: skill.name, uuid: undefined })
  );
});

test('should display skill experience dividing it on years and months', () => {
  render(
    <RenderWithProvider>
      <SkillBlock skill={skill} onEdit={() => {}} />
    </RenderWithProvider>
  );
  const experienceElement = screen.getByTestId('skill-experience');

  expect(experienceElement.textContent).toEqual('1y 1m');
});
