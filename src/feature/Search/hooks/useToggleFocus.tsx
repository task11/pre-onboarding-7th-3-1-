import { useRef, useState } from 'react';

export default function useToggleFocus(initialState: boolean) {
  const inputWrapRef = useRef<HTMLDivElement>(null);
  const [isSearching, setIsSearching] = useState(initialState);

  const inputFocusHandler = () => {
    inputWrapRef.current?.classList.add('focus-input');
    setIsSearching(true);
  };

  const inputBlurHandler = () => {
    inputWrapRef.current?.classList.remove('focus-input');
    setIsSearching(false);
  };

  return { inputWrapRef, isSearching, inputFocusHandler, inputBlurHandler };
}
