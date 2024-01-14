import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const WidgetContainer = styled.div`
  width: 100%;
  max-width: 350px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
