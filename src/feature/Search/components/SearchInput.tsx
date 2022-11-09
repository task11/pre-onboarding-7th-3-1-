import { useMemo } from 'react';

import {
  StyledButton,
  StyledCancel,
  StyledIcon,
  StyledIconButton,
  StyledInput,
  StyledInputButtonWrapper,
  StyledInputWithLabel,
  StyledInputWrapper,
  StyledSearchInputWrapper,
} from './SearchInput.style';

import Icons from '../../../components/Icons';
import useToggleFocus from '../hooks/useToggleFocus';
import useSearchQuery from '../hooks/useSearchQuery';
import SearchResultList from './SearchResultList';

export default function SearchInput() {
  const { isSearching, inputWrapRef, inputBlurHandler, inputFocusHandler } =
    useToggleFocus(false);

  const {
    searchQuery,
    inputSearchHandler,
    handleMouseDown,
    inputClear,
    submitSearch,
    setSearchQuery,
  } = useSearchQuery('');

  const isSearchActive = useMemo(
    () => !searchQuery.length && !isSearching,
    [isSearching, searchQuery.length],
  );

  return (
    <StyledSearchInputWrapper>
      <StyledInputButtonWrapper ref={inputWrapRef}>
        <StyledInputWrapper>
          <StyledInputWithLabel>
            <div>
              <label className="label" htmlFor="search_bar_main">
                <div className="label-title">질환명을 검색해주세요.</div>
              </label>
            </div>
            <div className="search-input-wrapper">
              <div className="input-wrapper">
                {isSearchActive && (
                  <div className="icon-placeholder-wrapper">
                    <div className="icon-placeholder">
                      <div className="search-icon">
                        <Icons.Search />
                      </div>
                      <div className="search-placeholder">
                        질환명을 입력해 주세요.
                      </div>
                    </div>
                  </div>
                )}
                <StyledInput
                  type="search"
                  id="search_bar_main"
                  value={searchQuery}
                  onChange={inputSearchHandler}
                  onFocus={inputFocusHandler}
                  onBlur={inputBlurHandler}
                  autoComplete="off"
                  spellCheck="false"
                />
                {isSearching && (
                  <StyledCancel
                    onClick={inputClear}
                    onMouseDown={handleMouseDown}
                  >
                    <Icons.Cancel />
                  </StyledCancel>
                )}
              </div>
            </div>
          </StyledInputWithLabel>
        </StyledInputWrapper>
        <StyledButton onClick={submitSearch}>
          <StyledIconButton>검색버튼</StyledIconButton>
          <StyledIcon>
            <Icons.Search />
          </StyledIcon>
        </StyledButton>
        {isSearching && (
          <SearchResultList
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
      </StyledInputButtonWrapper>
    </StyledSearchInputWrapper>
  );
}
