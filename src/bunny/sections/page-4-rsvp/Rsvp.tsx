import { Firestore } from 'firebase/firestore'
import styled from 'styled-components'
import { BaseFont, colors } from '../../CommonCss'
import { Content } from '../../Content'
import SeparatorImage from '../../common/SeparatorImage'

import SeparatorThin from '../../common/SeparatorThin'
import Title from '../../common/Title'
import separatorAPng from '../../images/separator-4a.png'
import RsvpForm from './RsvpForm'
import SectionContainer from '../../common/SectionContainer'
import PageNumber from '../../common/PageNumber'

const Subtitle = styled.h3`
    font-size: 14px;
    max-width: 300px;
    text-align: center;
    color: ${colors.primaryLight};
    margin: 0px;
    ${BaseFont}
`

const BottomSpace = styled.div`
    width: 100%;
    height: 30px;
`

const Rsvp = ({ content, firestore }: { content: Content, firestore: Firestore }) => 
    <SectionContainer>
        <Title>{content.rsvp.title}</Title>
        <Subtitle>{content.rsvp.message}</Subtitle>
        <SeparatorImage src={separatorAPng} />
        <RsvpForm content={content} firestore={firestore} />
        <SeparatorThin />
        <BottomSpace />
        <PageNumber p={4} />
    </SectionContainer>

export default Rsvp
