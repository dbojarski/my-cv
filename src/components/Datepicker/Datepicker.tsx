import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { Label } from '../Label/Label';

type DatepickerProps = ReactDatePickerProps & {
  label?: string;
};

export function Datepicker(props: DatepickerProps) {
  const { label, ...datePickerProps } = props;

  return (
    <Label text={props.label} data-testid='datepicker'>
      <ReactDatePicker
        {...datePickerProps}
        onChange={props.onChange}
        dateFormat='MM/yyyy'
        showMonthYearPicker
      />
    </Label>
  );
}
