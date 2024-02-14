import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function startsWithNumber (collectionName: string ) {

  const words = collectionName.split('');

  for (const word of words ) {
    if (isNaN(parseInt(word))) {
      return false;
    }
    return true;
  }

}



