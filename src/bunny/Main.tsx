import styled from 'styled-components'
import Landing from './sections/Landing'
import content from './Content'
import whitePaperTexture from './images/white-paper-texture.png'

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #eee;
`

const InvitationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    min-height: 100vh;
    /*background-color: #f6f4f0;*/
    /*background-image: url(${whitePaperTexture});*/
`

const Main = () => {
    const c = content.es
    return (
        <Background>
            <InvitationContainer>
                <Landing content={c} />
            </InvitationContainer>
        </Background>
    );
};

export default Main
