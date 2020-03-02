import styled, { css } from 'styled-components';


const Default = css`
  padding: .5rem;
`;

export const StyleIncomeExpWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
`;


export const StyleHeader = styled.div`
  display:flex;
  /* TODO: DELETE */
  border: 2px solid blue;
  align-items:center;
  /* flex-direction:column; */
  width: 100%;
  flex-direction: column-reverse;
  padding: .5rem;
  @media(min-width:900px){
    flex-direction: row;
  }
`;

export const StyleBalanceWrapper = styled.div`
  ${Default};
  margin: 4rem 0 0 1rem 0;
  /* TODO: DELETE */
  border: 2px solid red;
  h3{
    font-size: 2.2rem;
  }
  @media(max-width: 900px){
    margin-right: auto;
  }
`;

export const StyleExpenseVsBalance = styled.div`
  /* TODO: DELETE */
  border: 2px solid black;
  display: flex;
  justify-content: space-evenly;
  ${Default};
  margin: 2rem 0;
  background: ${(props) => props.theme.colors.darkRGBA};
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
