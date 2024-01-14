import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #f2f2f2;

  padding: 10px 20px;
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 570px) {
    & > :nth-child(2) {
      display: none;
    }
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Logo = styled.p`
  font-size: 20px;
  font-weight: bold;

  color: #2758a1;
`;

export const Username = styled.p`
  font-weight: 500;
  font-size: 16px;

  color: #232326;
`;

export const Subtitle = styled.p`
  font-size: 15px;

  color: #8c8c8c;
`;
