import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [switchValue, setSwitchValue] = useLocalStorage('switchKey', false);

  useEffect(() => {
    switchValue
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [switchValue]);

  return [switchValue, setSwitchValue];
};
