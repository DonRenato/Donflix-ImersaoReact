import styled from 'styled-components';

export const Title = styled.h3`
  font-size:35px;
  line-height: 1;
  font-weight: normal;
  padding: 20px;
  display: inline-block;
  border-radius:4px;
  margin-bottom: 16px;


  @media (max-width: 800px) {
    font-size:18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
 margin-left: 16px;
 text-decoration: none;
transition: opacity .3s;

 &:hover,
 &:focus{
   opacity: .5;
 }
  @media (max-width: 800px) {
   display:block;
   margin-bottom:16px;
   margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
 list-style: none;
 padding-left: 0;
 margin: 0;
 display: flex;
 overflow: auto;
 
 li{
   margin-right: 16px;
 }
`;

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom:16px;
`;
