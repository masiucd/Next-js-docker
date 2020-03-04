import styled, { css } from 'styled-components';


const Default = css`
  padding: 1.7rem;
  border-radius: .6rem;
`;

const FlexStyles = css`
  display: flex;
  justify-content: center;
  align-items:center;
`;

const BtnStyles = css`
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
`;

export const ListWrapper = styled.div`
  ${Default};
  .no-items-msg{
    font-size: 2.5rem;
    margin: 0 auto;
    display: block;
    text-align: center;
    padding: .1rem 0 2rem 0;
  }
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
      ${BtnStyles};
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
  ${FlexStyles};

`;

export const StyledListForm = styled.form`
  ${Default};
  ${FlexStyles};
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  width: 90%;
  label{
    display: flex;
    flex-direction: column;
    span{
      font-size: 1.2rem;
      text-transform: capitalize;
    }
  }
  button{
    ${BtnStyles};
    width: 35%;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    @media(max-width: 780px){
      width: 10rem;
    }
  }
`;


export const Input = styled.input`
  width: 15rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  box-shadow:  ${(props) => props.theme.shadow.lightShadow};
  padding: .2rem .6rem;
  font-size: 1.2rem;
  border-radius: .5rem;
  margin: .7rem 0;
  outline: none;
  transition: ${(props) => props.theme.transition.mainTransition};
  &:focus{
    border: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow:  ${(props) => props.theme.shadow.lightShadow};
  }
  @media(min-width:600px){
    width: 20rem;
  }
  @media(min-width:850px){
    width: 30rem;
  }

`;
