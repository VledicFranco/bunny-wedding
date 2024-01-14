import styled from 'styled-components'

import separatorPng from '../images/separator-footer.png'
import SeparatorImage from '../common/SeparatorImage'
import { CursiveFont } from '../CommonCss'
import { Content } from '../Content'

const Container = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Title = styled.h2`
    font-size: 24px;
    margin-top: 0px;
    font-weight: bold;
    ${CursiveFont}
`

const Footer = ({ content }: { content: Content }) =>
    <Container>
        <Title>{content.footer.message}</Title>
        <SeparatorImage src={separatorPng} />
    </Container>

export default Footer 

