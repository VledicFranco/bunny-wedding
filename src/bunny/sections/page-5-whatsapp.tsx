import styled from 'styled-components'
import { BaseFont } from '../CommonCss'
import { Content } from '../Content'

import SeparatorImage from '../common/SeparatorImage'
import SeparatorThin from '../common/SeparatorThin'
import Title from '../common/Title'
import separatorPng from '../images/separator-4.png'
import SectionContainer from '../common/SectionContainer'
import Paragraph from '../common/Paragraph'
import PageNumber from '../common/PageNumber'

const Container = styled.div`
    margin-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #f8f2ed;
    border-bottom: 2px solid #d1ccc7;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
`

const Button = styled.a`
    font-size: 16px;
    margin: 0px;
    margin-top: 20px;
    font-weight: bold;
    ${BaseFont}
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    background-color: #5d856e;
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
        background-color: #FFB84D;
    }
`

const WhatsApp = ({ content }: { content: Content }) =>
    <SectionContainer>
        <Title>{content.whatsapp.title}</Title>
        <SeparatorImage src={separatorPng} />
        <Paragraph>{content.whatsapp.message}</Paragraph>
        <Button href="https://chat.whatsapp.com/KfZWUorjIBMAPnIXYmVxPI " target="_blank">{content.whatsapp.button}</Button>
        <SeparatorThin />
        <PageNumber p={5} />
    </SectionContainer>

export default WhatsApp 
