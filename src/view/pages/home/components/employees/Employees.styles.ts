import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #8c8c8c;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;

export const About = styled.button`
  display: flex;
  padding: 10px;

  border-radius: 6px;
  border: 1px solid #f2f2f2;

  background-color: transparent;
`;
