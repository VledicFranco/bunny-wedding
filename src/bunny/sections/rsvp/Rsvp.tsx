import styled from 'styled-components'
import { Content } from '../../Content'
import { BaseFont, CursiveFont, colors } from '../../CommonCss'
import { Firestore } from 'firebase/firestore'
import SeparatorImage from '../../common/SeparatorImage'

import separatorPng from '../../images/separator-4.png'
import RsvpForm from './RsvpForm'

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`

const Title = styled.h2`
    font-size: 42px;
    font-weight: bold;
    margin: 0px;
    ${CursiveFont}
`

const Subtitle = styled.h3`
    font-size: 14px;
    color: ${colors.primaryLight};
    margin: 0px;
    ${BaseFont}
`

const BottomSpace = styled.div`
    width: 100%;
    height: 100px;
`

const Rsvp = ({ content, firestore }: { content: Content, firestore: Firestore }) => {

    return <Container>
        <Title>{content.rsvp.title}</Title>
        <Subtitle>{content.rsvp.message}</Subtitle>
        <SeparatorImage src={separatorPng} />
        <RsvpForm content={content} firestore={firestore} />
        <BottomSpace />
    </Container>
}

export default Rsvp
