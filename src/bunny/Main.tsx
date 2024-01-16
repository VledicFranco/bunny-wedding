import styled from 'styled-components'
import Landing from './sections/page-0-invitation'
import content from './Content'
import whitePaperTexture from './images/white-paper-texture.png'
import { useState } from 'react'
import DressCode from './sections/page-1-dress-code'
import Accommodation from './sections/page-2-accomodation'
import Footer from './sections/page-6-bunnies'
import { FirebaseApp } from 'firebase/app'
import { Firestore } from 'firebase/firestore'
import Rsvp from './sections/page-4-rsvp/Rsvp'
import Gifts from './sections/page-3-gifts'
import WhatsApp from './sections/page-5-whatsapp'

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #f8f2ed;
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
