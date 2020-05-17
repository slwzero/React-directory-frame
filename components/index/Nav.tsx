import styled from 'styled-components';

const StyledNav = styled.nav`
    background: ${({theme}) => theme.colors.nav};
    width:  100%;
    height: 80px;
    margin-bottom: ${({theme}) => theme.margin};
`;

export default function Nav () {
    return <StyledNav></StyledNav>
}