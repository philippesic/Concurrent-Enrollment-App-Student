
import {get, post} from './useGetPost' 
import {onMount, onChange} from './useOnEvent'
export * from './Hooks'
export * from './ui'

function formatSize (fileSize) {
  let size = Math.abs(fileSize);

  if (Number.isNaN(size)) {
    return 'Invalid file size';
  }

  if (size === 0) {
    return '0 bytes';
  }

  const units = ['bytes', 'kB', 'MB', 'GB', 'TB'];
  let quotient = Math.floor(Math.log2(size) / 10);
  quotient = quotient < units.length ? quotient : units.length - 1;
  size /= (1024 ** quotient);

  return `${+size.toFixed(2)} ${units[quotient]}`;
};


function forEach(arr, handler) {
  if(!arr) return;
  if(!Array.isArray(arr)) return;
  return arr.map(handler); 
}

export default {
  get,
  post,
  onMount,
  onChange,
  formatSize,
  forEach,
};