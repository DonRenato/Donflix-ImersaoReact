import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FooterBase = styled.footer`
  background-color: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--primary);
  padding: 32px 16px;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom:50px; 
  }
`;
