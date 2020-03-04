import styled from 'styled-components';


export const StyTitle = styled.section`
  padding: .5rem .8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 2rem auto;
  width: 90%;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 1rem;
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
