import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div`
    position: relative;
    display: flex;
`;

export const FieldContainer = styled.label`
    margin-bottom: 20px;
    width: 50%;
    display: flex;
    margin-left:25%;
    margin-right:25%;

    @media (max-width:800px){
        width:100%;
        margin-left:0;
       margin-right:0;
    }
`;

export const Label = styled.span`
    margin-bottom: 20px;
    width: 50%;
    display: flex;
    margin-left:25%;
    margin-right:25%;

    @media (max-width:800px){
        width:100%;
        margin-left:0;
       margin-right:0;
    }
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

export const TextArea = styled.textarea`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
 
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
   
  &:focus:not([type='color']) + ${Label} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
   
`;
