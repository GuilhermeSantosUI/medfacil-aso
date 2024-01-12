import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 16px;

  padding: 16px 10px;

  .changeMonth {
    margin: 0px 20px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .currentMonth {
    margin-left: 24px;
    font-size: 24px;
  }

  .weekContainer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day {
    margin: 8px;

    width: 32px;
    height: 32px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
  }

  .weekNames {
    color: #9e9e9e;
    cursor: default;
  }

  .inactiveDay {
    color: #9e9e9e;
  }

  .today {
    background: #efefee;
    border-radius: 4px;
  }

  .selectedDay {
    color: white;
    background: #2758a1;
    border-radius: 4px;
  }

  .navIcon {
    width: 20px;
    height: 20px;

    padding: 8px;

    cursor: pointer;
  }

  .navIcon:hover {
    border-radius: 4px;
    background: #efefee;
  }

  .todayButton {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    margin-right: 8px;
  }

  .todayButton:hover {
    background: #efefef;
  }
`;

export const InfoTitle = styled.p`
  font-size: 14px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding-bottom: 10px;
`;
