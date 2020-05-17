import styled from 'styled-components';

const StyledLeftTopBar = styled.div`
    background: #719147;
    flex: 1;
    margin-bottom: ${({theme}) => theme.margin};
    @media (max-width: ${({theme}) => theme.query.min}) {
        margin-bottom: 0;
        margin-right: ${({theme}) => theme.margin};
    }
`;

export default function LeftTopBar () {
    return <StyledLeftTopBar></StyledLeftTopBar>
}