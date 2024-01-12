import styled from 'styled-components';

export const Container = styled.aside`
  width: 550px;
  height: 100vh;

  border-left: 1px solid #f2f2f2;

  display: flex;
  flex-flow: column;

  padding: 20px;
`;

export const InfoContent = styled.div`
  margin-top: 24px;
  height: 100%;
  flex-flow: 1;
`;

export const InfoFooter = styled.div`
  margin-top: 24px;
  height: 100%;
  flex-flow: 1;

  display: flex;
  height: fit-content;
  gap: 8px;
  margin-top: 0;
`;

export const InfoList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding-bottom: 10px;
`;

export const InfoValue = styled.h1`
  font-size: 50px;
`;
