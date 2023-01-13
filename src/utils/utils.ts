import { periods } from "../constants";

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const getClasses = (variant: string, shadow: boolean, size: string, disabled: boolean): string => {
  const classList = [];

  switch (variant) {
    case 'outlined':
      !disabled ? classList.push(variant) : classList.push('disabled_out');
      break;
    case 'text':
      !disabled ? classList.push(variant) : classList.push('disabled_text');
      break;
    case 'circle':
      !disabled ? classList.push(variant) : classList.push('disabled_circle');
      break;
    default:
      !disabled ? classList.push(variant) : classList.push('disabled');
      break;
  }

  shadow && classList.push(`shadow`);
  size && classList.push(size);

  return classList.join(' ');
};

export const getPeriod = variant => {
  switch (variant) {
    case 'small':
      return periods[0];
    case 'medium':
    case 'large':
      return periods[1];
    default:
      return periods[0];
  }
};