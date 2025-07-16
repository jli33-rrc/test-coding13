import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{
  backgroundColour?: string;
  textColour?: string;
  hoverable?: boolean;
  striped?: boolean;
}>`
  background-color: ${({ backgroundColour }) => backgroundColour || '#FFFAF5'};
  border-collapse: collapse;
  color: ${({ textColour }) => textColour || '#353433'};
  font-family: sans-serif;
  font-size: 1rem;
  width: 100%;

  th,
  td {
    border: 1px solid #353433;
    padding: 12px;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    ${({ striped }) => striped && 'background-color: #D4D0CC;'}
  }

  tbody tr:hover {
    ${({ hoverable }) => hoverable && 'background-color: #918E8B; cursor: default;'}
  }

  thead {
    background-color: #d4d0cc;
    font-weight: bold;
  }

  tfoot {
    background-color: #d4d0cc;
    font-weight: bold;
  }
`;

const Table: React.FC<TableProps> = ({ headers, rows, footer, backgroundColour, textColour, striped, hoverable }) => (
  <StyledTable backgroundColour={backgroundColour} textColour={textColour} striped={striped} hoverable={hoverable}>
    {headers && (
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
    {footer && (
      <tfoot>
        <tr>
          {footer.map((cell, index) => (
            <td key={index}>{cell}</td>
          ))}
        </tr>
      </tfoot>
    )}
  </StyledTable>
);

export { Table };
