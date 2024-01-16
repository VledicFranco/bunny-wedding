import styled from 'styled-components'

import { CursiveFont } from '../CommonCss'
import { Content } from '../Content'
import SeparatorImage from '../common/SeparatorImage'
import separatorPng from '../images/separator-footer.png'

import SectionContainer from '../common/SectionContainer'
import bgPng from '../images/bg1.png'
import titleSeparatorPng from '../images/title-separator.png'

const Container = styled(SectionContainer)`

    /*
    margin-top: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    */
    position: relative;
    background-image: url(${bgPng});
    background-size: 400px;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 700px) {
        background-size: 600px;
    }
`

const Image = styled(SeparatorImage)`
    position: absolute;
`

const Title = {
    Wrapper: styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        top: 10%;
    `,
    H2: styled.h2`
        font-size: 24px;
        margin: 0px;
        font-weight: bold;
        ${CursiveFont}
    `,
    SeparatorTitle: styled.img`
        width: 360px;
        margin-top: -20px;
    `
}

const Footer = ({ content }: { content: Content }) =>
    <Container>
        <Image src={separatorPng} />
        <Title.Wrapper>
            <Title.H2>{content.footer.message}</Title.H2>
            <Title.SeparatorTitle src={titleSeparatorPng} />
        </Title.Wrapper>
    </Container>

export default Footer 

