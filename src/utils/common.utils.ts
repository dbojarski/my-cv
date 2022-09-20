export function isAnyFieldEmpty(data: Object): boolean {
  if (!data) return true;

  return Object.values(data).some((value) =>
    ['', null, undefined].includes(value)
  );
}
