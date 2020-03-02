import styled, { css } from 'styled-components';


const Default = css`
  padding: 1.7rem;
  border-radius: .6rem;
`;

export const ListWrapper = styled.div`
  ${Default};

`;


export const StyledListItem = styled.section`
  ${Default};
  display: flex;
  margin: .8rem 0;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  color: ${({ theme }) => theme.colors.white};
  background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, ${({ theme }) => theme.colors.primary}), color-stop(50%, ${({ theme }) => theme.colors.warning}));
  background-image: linear-gradient(to right, ${({ theme }) => theme.colors.primary} 50%, ${({ theme }) => theme.colors.warning} 50%);
  background-position: 0;
  background-size: 200%;
  -webkit-transition: all 0.4s;
  transition: ${(props) => props.theme.transition.mainTransition};
  &:hover{
    background-position: -100%;
    color: ${({ theme }) => theme.colors.primary};
  }
  span{
    font-size: 1.2rem;
  }
  .btn-group{
    span{
      font-size: 1rem;
      border: 2px solid ${(props) => props.theme.colors.primary};
      padding: .4rem 1rem;
      margin: 0 .4rem;
      border-radius: .6rem;
      width: 7rem;
      box-shadow: ${({ theme }) => theme.shadow.lightShadow};
      transition: ${({ theme }) => theme.transition.quickTransition};
      cursor: pointer;
      position: relative;
      &:hover{
        box-shadow: ${({ theme }) => theme.shadow.darkShadow};
      }
    }
    span:first-child{
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
    }
    span:last-child{
      background: ${(props) => props.theme.colors.danger};
      color: ${(props) => props.theme.colors.white};
    }
    span:active{
      top: 6px;
    }
  }

  @media(max-width:578px){
    flex-direction: column;
    justify-content: center;
    align-items:center;
    span,.btn-group{
      margin: 1rem 0;
    }
    .btn-group{

    }
  }
`;


export const ListFormWrapper = styled.div`
  ${Default};
`;

export const StyledListForm = styled.form`

`;
export const Input = styled.input`

`;
