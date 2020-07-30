import styled from 'styled-components';


export const Field = styled.div`
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

export const Input = styled.input`
   flex: 1;
   height: 50px;
   border-radius: 4px;
   font-size: 20px;
   
`;

