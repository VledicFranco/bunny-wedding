import styled from 'styled-components'
import Landing from './sections/Landing'
import content from './Content'
import whitePaperTexture from './images/white-paper-texture.png'
import { useState } from 'react'
import DressCode from './sections/DressCode'
import Accommodation from './sections/Accommodation'
import Footer from './sections/Footer'
import { FirebaseApp } from 'firebase/app'
import { Firestore } from 'firebase/firestore'
import Rsvp from './sections/rsvp/Rsvp'
import Gifts from './sections/Gifts'
import WhatsApp from './sections/WhatsApp'

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

const Main = ({ firebase, firestore }: { firebase: FirebaseApp, firestore: Firestore }) => {
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
                <Gifts content={c} />
                <Rsvp content={c} firestore={firestore} />
                <WhatsApp content={c} />
                <Footer content={c} />
            </InvitationContainer>
        </Background>
    );
};

export default Main
