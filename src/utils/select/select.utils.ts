import { SelectItem } from '../../components/Select/Select';

export function mapToOptions<T = any>(
  items: T[],
  textKey: keyof T,
  valueKey: keyof T
): SelectItem[] {
  return items.map((item) => ({
    text: item[textKey] as string,
    value: item[valueKey],
  }));
}
