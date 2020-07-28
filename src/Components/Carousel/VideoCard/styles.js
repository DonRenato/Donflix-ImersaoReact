import styled from 'styled-components';

export const VideoCardContainer = styled.a`
    height: 197px;
    width:298px;
    border: 2px solid;
    display: inline-block;
    background-image: ${({url}) => `url(${url})`};
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    transition: opacity .3s;

    &:hover,
    &:focus{
      opacity: .5;
    }

  
`;
