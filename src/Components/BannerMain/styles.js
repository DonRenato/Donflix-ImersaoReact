import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;}
 
`;

ContentAreaContainer.Item = styled.div`
  width:50%;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width:100%;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
      display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  
  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  height: 80vh;
  color: #d45959;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
 

  @media (max-width: 800px){
    height: auto;
    min-height: 50vh;

  }

  
  
 
`;

export const WatchButton = styled.button`
  cursor: pointer;
  padding: 16px 24px;
  max-width: 90px;
  font-weight:bold;
  outline: none;
  border: 0;
  border-radius: 4px;
  color: var(--black);
  background-color: var(--white);
  font-size:16px;
  margin-left: auto;
  margin-right: auto;
  display: none;
  text-decoration: none;

  @media (max-width: 800px) {
    display: block;
  }
`;
