import styled from 'styled-components';

export const ButtonCad = styled.button`
    width: 50%;
    color: var(--white);
    border: 1px solid var(--white);
    padding: 16px 24px;
    font-size: 16px;
    border-radius:4px;
    font-weight: bold;
    text-decoration: none;
    transition: opacity .3s;
    background-color: var(--black);
    margin-left:25%;
    margin-right:25%;
   
    &:hover,
    &:focus {
        opacity: 0.5;
    }

    @media (max-width:800px){
        width:100%;
        margin-left:0;
       margin-right:0;
    }
    `;

    export const Title = styled.h1`
    @media (min-width:800px){
        position:relative;
        left: 25%;
    }
    `;