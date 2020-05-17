import styled,  { ThemeProvider } from 'styled-components'
import Nav from 'components/index/Nav'
import  LeftTopBar from 'components/index/LeftTopBar'
import LeftBottomBar from 'components/index/LeftBottomBar'
import Center from 'components/index/Center'
import RightPad from 'components/index/RightPad'
import Footer from 'components/index/Footer'
import { theme } from 'themes'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0 auto;
  height: 100%;
`

const StyleMid = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  margin-bottom: ${({theme}) => theme.margin};
  @media (max-width: ${({theme}) => theme.query.min}) {
    flex-direction: column;
  }
`;

const StyledMidLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  @media (max-width: ${({theme}) => theme.query.min}) {
    flex-direction: row;
    margin-bottom: ${({theme}) => theme.margin};
  }
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Nav></Nav>
        <StyleMid>
          <StyledMidLeft>
            <LeftTopBar/>
            <LeftBottomBar/>
          </StyledMidLeft>
          <Center/>
          <RightPad/>
        </StyleMid>
        <Footer />
      </Main>
    </ThemeProvider>
    
  )
}
  