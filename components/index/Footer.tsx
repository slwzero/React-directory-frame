import { useState } from 'react'
import styled from 'styled-components'
import Button from 'components/common/Button'

const StyledFooter = styled.div`
    background: ${({theme}) => theme.colors.footer};
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Footer () {
    const [buttonText, setButtonText] = useState('Click here!')
    return (
        <StyledFooter>
            <Button onClick={() => {
                setButtonText('Clicked')
            }}>{buttonText}</Button>
        </StyledFooter>
    )
}