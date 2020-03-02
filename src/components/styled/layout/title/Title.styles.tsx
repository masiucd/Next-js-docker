import styled from 'styled-components';


export const StyTitle = styled.section`
  padding: .5rem .8rem;
  /* TODO:Remove */
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 2rem auto;
  width: 90%;

`;

export const StyH1 = styled.h1`
    font-size: 1.6rem;
  @media(min-width:876px){
    font-size: 3rem;
  }
`;
export const StyH4 = styled.h4`
    font-size: 1.2rem;
  @media(min-width:876px){
    font-size: 2rem;
  }
`;
