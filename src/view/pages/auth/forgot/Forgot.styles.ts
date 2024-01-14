import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const Branding = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.p`
  font-size: 20px;
  font-weight: bold;

  color: #2758a1;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: red;
`;

export const Form = styled.form`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Navigation = styled(Link)``;
