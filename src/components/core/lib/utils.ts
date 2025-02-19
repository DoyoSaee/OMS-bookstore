import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, set } from 'date-fns';
import { ko } from 'date-fns/locale';
import { isSameDay } from 'date-fns';
import { customTwMerge } from './extend';

export * from './bookspider';
export { clsx, format, ko, isSameDay };

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

export function cnOrigin(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// px를 rem으로 변환
export const pxToRem = (px: number) => `${px / 16}rem`;

// Convert hex to RGB
export const hexToRgb = (hex: string) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
};

// Convert RGB to hex
export const rgbToHex = (r: number, g: number, b: number) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

// Lighten or darken a color
export const lightenDarkenColor = (col: string, amt: number) => {
  let { r, g, b } = hexToRgb(col);
  r = Math.min(255, Math.max(0, r + amt));
  g = Math.min(255, Math.max(0, g + amt));
  b = Math.min(255, Math.max(0, b + amt));
  return rgbToHex(r, g, b);
};

// Add opacity to a color
export const addOpacity = (col: string, opacity: number) => {
  const { r, g, b } = hexToRgb(col);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
): T {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, args);
    }, wait);
  } as T;
}

export function log(...args: any[]) {
  if (process.env.NODE_ENV !== 'production') {
    console.info(...args);
  }
}

export const getCookie = (name: string): string | undefined => {
  const cookies = document.cookie
    .split('; ')
    .reduce((acc: { [key: string]: string }, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});

  return cookies[name] || undefined;
};

export const setCookie = (name: string, value: string, days: number = 30) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

export const deleteCookie = (name: string) => {
  document.cookie = name + '=; Max-Age=-1; path=/';
};

export function getKeyByValue<T extends object, K extends keyof T>(
  object: T,
  value: T[K] | string,
): K | undefined {
  return Object.keys(object).find((k) => object[k as K] === value) as
    | K
    | undefined;
}

export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;

export const notNullish = (value: any): boolean => {
  return value !== null && value !== undefined;
};

export function flatten<T>(data: any): T[] {
  return data
    ? data?.pages?.flatMap((page: { content: T[] }) => page?.content)
    : [];
}

export function combineDateAndTime(date: Date, time: string): string {
  const [hours, minutes] = time.split(':').map(Number);

  // Combine date and time into a Date object
  const combinedDate = set(date, { hours, minutes });

  // Adjust to local timezone and format as ISO string without 'Z'
  const offset = combinedDate.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localDate = new Date(combinedDate.getTime() - offset); // Adjust to local timezone

  return localDate.toISOString().split('.')[0]; // Remove milliseconds and 'Z'
}
// export function getTotalItems(data: any) {
//   return data ? data.pages[0].totalItems : 0;
// }
