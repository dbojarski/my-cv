import { mapToOptions } from './select.utils';

const arr = [
  { a: 'abc', b: 'cde' },
  { a: true, b: 'cde' },
  { a: null, b: 'cde' },
];

test.each(arr)('should map options', (obj: { a: any; b: string }) => {
  expect(mapToOptions([obj], 'a', 'b')).toEqual([
    {
      text: String(obj.a),
      value: obj.b,
    },
  ]);
});
