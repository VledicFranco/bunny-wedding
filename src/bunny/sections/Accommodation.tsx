import styled from 'styled-components'
import { Content } from '../Content'
import { BaseFont, CursiveFont } from '../CommonCss'

import separator3Png from '../images/separator-3.png'
import SeparatorImage from '../common/SeparatorImage'

const Container = styled.div`
    margin-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`

const Title = styled.h2`
    font-size: 42px;
    margin-bottom: 20px;
    margin-top: 0px;
    font-weight: bold;
    ${CursiveFont}
`

const Message = styled.p`
    font-size: 14px;
    margin: 0px;
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
    padding: 0px 20px;
    ${BaseFont}
`

const Accommodation = ({ content }: { content: Content }) =>
    <Container>
        <Title>{content.accommodation.title}</Title>
        <SeparatorImage src={separator3Png} />
        <Message>{content.accommodation.message}</Message>
    </Container>

export default Accommodation
