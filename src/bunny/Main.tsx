import styled from 'styled-components'
import Landing from './sections/Landing'
import content from './Content'
import whitePaperTexture from './images/white-paper-texture.png'
import { useState } from 'react'
import DressCode from './sections/DressCode'
import Accommodation from './sections/Accommodation'
import Footer from './sections/Footer'

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
    //max-width: 900px;
    min-height: 100vh;
    /*background-color: #f6f4f0;*/
    /*background-image: url(${whitePaperTexture});*/
`

const Main = () => {
    const [c, setC] = useState(content.es)
    return (
        <Background>
            <InvitationContainer>
                <Landing content={c} onPickLanguage={lang => {
                    if (lang === c.lang) return
                    else if (lang === 'es') setC(content.es)
                    else if (lang === 'en') setC(content.en)
                }} />
                <DressCode content={c} />
                <Accommodation content={c} />
                <Footer content={c} />
            </InvitationContainer>
        </Background>
    );
};

export default Main
