import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div<{
  backgroundColour?: string;
  disabled?: boolean;
  textColour?: string;
  width?: string;
}>`
  background-color: ${({ backgroundColour, disabled }) => (disabled ? '#FFFAF5' : backgroundColour || '#FFFAF5')};
  border: 1px solid #918e8b;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${({ textColour }) => textColour || '#353433'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: sans-serif;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  overflow: hidden;
  pointer-events: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  transition:
    box-shadow 0.3s ease,
    background-color 0.3s ease;
  width: ${({ width }) => width || '300px'};

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.2)')};
  }
`;

const CardTitle = styled.div`
  padding: 16px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CardBody = styled.div`
  font-size: 1rem;
  padding: 16px;
`;

const CardFooter = styled.div`
  padding: 16px;
  text-align: right;
`;

const CardImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

const Card: React.FC<CardProps> = ({
  title,
  body,
  src,
  alt,
  footer,
  width,
  disabled = false,
  backgroundColour,
  textColour,
}) => (
  <CardContainer width={width} disabled={disabled} backgroundColour={backgroundColour} textColour={textColour}>
    {src && <CardImage src={src} alt={alt} />}
    {title && <CardTitle>{title}</CardTitle>}
    {body && <CardBody>{body}</CardBody>}
    {footer && <CardFooter>{footer}</CardFooter>}
  </CardContainer>
);

export { Card };
