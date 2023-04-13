import styled from 'styled-components'
import { ButtonProps } from './types'

type SCButtonProps = Pick<ButtonProps, 'variant'>

export const Button = styled.button<SCButtonProps>`
  color: white;
  background-color: ${({ variant }) => {
    if (variant === 'primary') return '#5BCEFA'
    if (variant === 'secondary') return '#FFB347'
  }};
  font-size: 14px;
  border: none;
  border-radius: 10px;
  padding: 12px;
  transition: all 0.2s;
  :hover {
    background-color: ${({ variant }) => {
    if (variant === 'primary') return '#4793FF'
    if (variant === 'secondary') return '#FFA447'
  }};
  }
`;