import React from 'react';
import useLang from '../hooks/useLang';
import styled from 'styled-components';

const Lang = () => {
  const { lang, switchLang } = useLang();
  return (
    <StyledSwitch>
      <StyledLang
        onClick={switchLang}
        data={lang === 'ua' ? 'currentLang' : 'secondLang'}
      >
        UA
      </StyledLang>
      <StyledSpase> | </StyledSpase>
      <StyledLang
        onClick={switchLang}
        data={lang === 'en' ? 'currentLang' : 'secondLang'}
      >
        EN
      </StyledLang>
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flax;
  align-items: center;
  justify-content: center;
  background-color: #7cbbb0;
  width: 80px;
  height: 30px;
  border: 5px groove #1c6ea4;
  border-radius: 40px 40px 40px 40px;
  box-shadow: 3px 4px 2px #333333;
  cursor: pointer;
`;

const StyledLang = styled.span`
  text-decoration: ${({ data }) =>
    data === 'currentLang' ? ` underline` : `none`};
  font-size: ${({ data }) => (data === 'currentLang' ? ` 20px` : `17px`)};
  color: ${({ data }) => (data === 'currentLang' ? ` #210672` : `#7c7a7a`)};
  font-style: italic;
  font-family: inherit;
`;
const StyledSpase = styled.span`
  font-size: 20px;
  color: #210672;
`;
export default Lang;
