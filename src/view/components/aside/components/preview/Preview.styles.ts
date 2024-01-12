import styled from "styled-components";

export const Container = styled.div``;

export const ShadowOne = styled.div`
  width: 92%;
  height: 10px;
  background-color: #f3f6fc;
  border-radius: 4px 4px 0 0;
  margin: 0 auto;
`;

export const ShadowTwo = styled.div`
  width: 96%;
  height: 10px;
  background-color: #c7d7f0;
  border-radius: 4px 4px 0 0;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 100%;
  min-height: 150px;
  padding: 16px;

  background: radial-gradient(
    98.53% 96.9% at 50% 50%,
    #548de1 0%,
    #2758a1 100%
  );
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;

  color: #fff;

  position: relative;

  img {
    position: absolute;
    top: 16px;
    right: 16px;

    width: 36px;
    height: 36px;
  }
`;
