import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
`;

export const View = styled.div`
  width: 100%;

  overflow-y: auto;

  flex-grow: 1;
  padding: 20px;

  display: flex;
  flex-flow: column;
  gap: 10px;

  .design {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timeline {
    height: auto;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .timeline-content {
    padding: 16px 32px;
  }

  .timeline-component {
    margin: 0px 20px 20px 20px;
  }

  .timeline {
    display: grid;
    grid-template-columns: 0 3px 1fr;
  }

  .timeline-middle {
    position: relative;
    background-color: #f2f2f2;
    width: 1px;
    height: 100%;
  }

  .main-middle {
    opacity: 0;
  }

  .timeline-circle {
    position: absolute;

    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ffd161;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
