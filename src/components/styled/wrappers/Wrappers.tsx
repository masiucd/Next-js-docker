import styled, { css } from 'styled-components';

const DefaultStyles = css`
  padding: .5rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AppWrapper = styled.div`
  ${DefaultStyles};
  /* TODO: Remove */
  border: 2px solid red;
  width: 100%;
  padding: 0 .5rem;
  margin: 2rem auto;
  min-height: 50vh;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Wrapper = styled.div`
  ${DefaultStyles};
`;
