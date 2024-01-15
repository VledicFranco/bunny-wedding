import styled from 'styled-components'
import { Content } from '../Content'
import { BaseFont, CursiveFont } from '../CommonCss'

import separatorPng from '../images/separator-2.png'
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

const AmazonButton = styled.a`
    font-size: 18px;
    margin: 0px;
    margin-top: 20px;
    font-weight: bold;
    ${BaseFont}
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    background-color: #FF9900;
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
        background-color: #FFB84D;
    }
`

const Gifts = ({ content }: { content: Content }) =>
    <Container>
        <Title>{content.gifts.title}</Title>
        <SeparatorImage src={separatorPng} />
        <Message>{content.gifts.message}</Message>
        <BankInfo>Nombre: Francisco Miguel Aramburo Torres</BankInfo>
        <BankInfo>CLABE: 012 650 00479395474 2</BankInfo>
        <AmazonButton href="https://www.amazon.com.mx/wedding/registry/TTIW1A2V3VOI" target="_blank">Amazon</AmazonButton>
    </Container>

export default Gifts
