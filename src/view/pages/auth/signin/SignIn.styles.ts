import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  gap: 20px;

  padding: 20px;
`;

export const Branding = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Banner = styled.div`
  width: 70%;
  height: 100%;

  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 16px;
`;

export const Form = styled.form`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Navigation = styled(Link)``;

export const Logo = styled.p`
  font-size: 20px;
  font-weight: bold;

  color: #2758a1;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: red;
`;
