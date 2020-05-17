import styled from 'styled-components';

const StyledCenter = styled.div`
    background: ${({theme}) => theme.colors.primary};
    flex: 3;
    margin-left: ${({theme}) => theme.margin};
    margin-right: ${({theme}) => theme.margin};
    @media (max-width: ${({theme}) => theme.query.min}) {
        margin: 0 0 ${({theme}) => theme.margin} 0;
        order: -1;
    }
`;

export default function Center () {
    return <StyledCenter></StyledCenter>
}