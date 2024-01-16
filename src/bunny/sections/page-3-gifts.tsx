import styled from 'styled-components'
import { BaseFont } from '../CommonCss'
import { Content } from '../Content'

import SeparatorImage from '../common/SeparatorImage'
import SeparatorThin from '../common/SeparatorThin'
import Title from '../common/Title'
import separatorPng from '../images/separator-5.png'
import SectionContainer from '../common/SectionContainer'
import Paragraph from '../common/Paragraph'
import PageNumber from '../common/PageNumber'

const BankInfo = styled.p`
    font-size: 14px;
    margin: 0px;
    margin-top: 15px;
    width: 100%;
    max-width: 300px;
    padding: 0px 20px;
    ${BaseFont}
    font-weight: bold;
    text-align: center;
`

const Button = styled.a`
    font-size: 14px;
    margin: 20px 0px;
    width: 100px;
    padding: 10px 20px;
    ${BaseFont}
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    background-color: #5d856e;
    color: white;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`

const Gifts = ({ content }: { content: Content }) =>
    <SectionContainer>
        <Title>{content.gifts.title}</Title>
        <SeparatorImage src={separatorPng} />
        <Paragraph>{content.gifts.message}</Paragraph>
        <BankInfo>Nombre: Francisco Miguel Aramburo Torres</BankInfo>
        <BankInfo>CLABE: 012 650 00479395474 2</BankInfo>
        <Button href="https://www.amazon.com.mx/wedding/registry/TTIW1A2V3VOI" target="_blank">Amazon</Button>
        <SeparatorThin />
        <PageNumber p={3} />
    </SectionContainer>

export default Gifts
