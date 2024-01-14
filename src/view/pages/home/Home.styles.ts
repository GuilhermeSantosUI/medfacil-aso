import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  table {
    width: 100%;

    th:nth-child(2) {
      width: 300px;
    }

    td span {
      color: #8c8c8c;
    }
    td:last-child {
      display: flex;
      justify-content: center;
    }

    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #f2f2f2;
    }

    th {
      color: #8c8c8c;
      text-transform: uppercase;
      font: 500 0.75rem Bricolage Grotesque, sans-serif;
    }

    td {
      font-size: 0.875rem;

      a {
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
`;

export const About = styled(Link)`
  display: flex;
  padding: 10px;

  border-radius: 6px;
  border: 1px solid #f2f2f2;

  background-color: transparent;
`;
