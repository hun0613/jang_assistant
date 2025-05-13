import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const mergeClassNames = (...args: ArgumentArray): string => {
	console.log('fase');
	return twMerge(classNames(args));
};
