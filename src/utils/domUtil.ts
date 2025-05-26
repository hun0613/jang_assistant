import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const mergeClassNames = (...args: ArgumentArray): string => {
  return twMerge(classNames(args));
};

export const getWindow = (): Window | undefined => {
  return typeof window !== 'undefined' ? window : undefined;
};
