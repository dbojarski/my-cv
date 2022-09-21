import { createRef, useState } from 'react';

import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import {
  SelectContainer,
  SelectInput,
  SelectList,
  SelectListItem,
  ToggleIcon,
} from './Select.styles';

export type SelectItem = {
  text: string;
  value?: any;
};

type SelectProps = {
  disabled?: boolean;
  items: { text: string; value?: any }[];
  onChange: (skillNames: string[]) => void;
  text?: string;
  placeholder?: string;
};

export function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = createRef<HTMLInputElement>();
  const [selectedItems, selectItem] = useState<string[]>([]);

  const toggleSelect = () => setIsOpen(!isOpen);

  const toggleItem = (toSelect: SelectItem) => {
    const alreadyAdded = selectedItems.findIndex(
      (item) => item === toSelect.text
    );

    if (alreadyAdded !== -1) {
      const options = [...selectedItems];

      options.splice(alreadyAdded, 1);
      selectItem(options);
      props.onChange(options);

      return;
    }

    props.onChange([...selectedItems, toSelect.text]);
    selectItem([...selectedItems, toSelect.text]);
  };

  return (
    <SelectContainer>
      <Input ref={inputRef} hidden />

      <Label text={props.text}>
        <SelectInput disabled={props.disabled} onClick={toggleSelect}>
          <span
            title={selectedItems.join(', ')}
            className={!selectedItems.length ? 'select-placeholder' : ''}
          >
            {selectedItems.join(', ') || props.placeholder}
          </span>

          <ToggleIcon className={isOpen ? 'select-open' : ''} />
        </SelectInput>
      </Label>

      {isOpen && (
        <SelectList>
          {props.items.map((item) => (
            <SelectListItem
              key={item.text}
              className={
                selectedItems.includes(item.text) ? 'select-chosen' : ''
              }
              onClick={() => toggleItem(item)}
            >
              {item.text}
            </SelectListItem>
          ))}
        </SelectList>
      )}
    </SelectContainer>
  );
}
