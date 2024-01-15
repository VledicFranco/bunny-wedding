import styled from 'styled-components'
import { Content } from '../Content'
import { BaseFont, CursiveFont } from '../CommonCss'

import separatorPng from '../images/separator-5.png'
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

const Button = styled.a`
    font-size: 18px;
    margin: 0px;
    margin-top: 20px;
    font-weight: bold;
    ${BaseFont}
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    background-color: #2e8253;
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
        background-color: #FFB84D;
    }
`

const WhatsApp = ({ content }: { content: Content }) =>
    <Container>
        <Title>{content.whatsapp.title}</Title>
        <SeparatorImage src={separatorPng} />
        <Message>{content.whatsapp.message}</Message>
        <Button href="https://chat.whatsapp.com/KfZWUorjIBMAPnIXYmVxPI " target="_blank">{content.whatsapp.button}</Button>
    </Container>

export default WhatsApp 
