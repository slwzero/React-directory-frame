import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<{}> {
    children: React.ReactNode
}

const StyledButton = styled.button`
    outline: none;
    border: 0;
    width: 200px;
    height: 48px;
    color: #000;
    border-radius: 24px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    background: ${({theme}) => theme.colors.btnGradient};
`;

export default function Button ({children, ...rest}: ButtonProps) {
    return <StyledButton {...rest}>{children}</StyledButton>
}