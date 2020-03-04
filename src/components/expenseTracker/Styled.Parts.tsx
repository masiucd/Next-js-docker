import styled, { css } from 'styled-components';


const Default = css`
  padding: .5rem;
`;

export const StyleIncomeExpWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  border-radius: 1rem;
`;


export const StyleHeader = styled.div`
  display:flex;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  align-items:center;
  /* flex-direction:column; */
  width: 100%;
  flex-direction: column-reverse;
  padding: .5rem;
  @media(min-width:900px){
    flex-direction: row;
  }
  div{
    width: 35%;
  }
  section{
    width: 75%;
  }
`;

export const StyleBalanceWrapper = styled.div`
  ${Default};
  margin: 4rem 0 0 1rem 0;

  h3{
    font-size: 2.2rem;
  }
  @media(max-width: 900px){
    margin-right: auto;
  }
`;

export const StyleExpenseVsBalance = styled.div`
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-evenly;
  ${Default};
  margin: 2rem 0;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(0,0,6,0.6671043417366946) 16%, rgba(11,11,11,0.639093137254902) 47%, rgba(14,13,6,0.8998774509803921) 100%);
  color: ${(props) => props.theme.colors.white};
  .income{

  }
  .expense{

  }
  .income,.expense{
    width: 45%;
    text-align:center;
  }
  span{
    font-size: 2rem;
    padding: .8rem;
  }
`;
