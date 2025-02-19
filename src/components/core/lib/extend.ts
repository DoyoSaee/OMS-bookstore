import { extendTailwindMerge } from 'tailwind-merge';

export const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-h1',
        'text-h2',
        'text-h3',
        'text-h4',
        'text-h5',
        'text-h6',
        'text-h7',
        'text-title1',
        'text-title2',
        'text-title3',
        'text-title4',
        'text-body1',
        'text-body2',
        'text-body3',
        'text-body4',
        'text-body5',
        'text-body6',
        'text-body7',
        'text-caption1',
        'text-caption2',
      ],
      'text-color': [
        'text-primary-blue-0',
        'text-primary-blue-25',
        'text-primary-blue-50',
        'text-primary-blue-100',
        'text-primary-blue-200',
        'text-primary-blue-300',
        'text-primary-blue-400',
        'text-primary-blue-500',
        'text-primary-blue-600',
        'text-primary-blue-700',
        'text-primary-blue-800',
        'text-primary-blue-900',
        'text-primary-blue-hover',
        'text-secondary-blue-100',
        'text-secondary-blue-200',
        'text-secondary-blue-300',
        'text-secondary-green-0',
        'text-secondary-green-50',
        'text-secondary-green-100',
        'text-secondary-green-200',
        'text-secondary-green-300',
        'text-secondary-green-400',
        'text-secondary-green-500',
        'text-secondary-green-600',
        'text-secondary-green-700',
        'text-secondary-green-800',
        'text-secondary-green-900',
      ],
    },
  },
});
