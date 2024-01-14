import styled from 'styled-components'
import Landing from './sections/Landing'
import content from './Content'
import whitePaperTexture from './images/white-paper-texture.png'
import { useState } from 'react'
import DressCode from './sections/DressCode'

import separator1Png from './images/separator-1.png'
import separator2Png from './images/separator-2.png'
import separator3Png from './images/separator-3.png'

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

const Separator = styled.img`
    padding: 50px 0px 10px 0px;
    width: 70%;
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
                <Separator src={separator1Png} />
                <DressCode content={c} />
                <Separator src={separator2Png} />
                <Separator src={separator3Png} />
            </InvitationContainer>
        </Background>
    );
};

export default Main
