import styled from 'styled-components'
import { BaseFont, CursiveFont, colors } from '../CommonCss'
import { Content } from '../Content'

import Paragraph from '../common/Paragraph'
import SectionContainer from '../common/SectionContainer'
import SeparatorImage from '../common/SeparatorImage'
import SeparatorThin from '../common/SeparatorThin'
import Title from '../common/Title'
import lvl1aPng from '../images/dresscode/lvl1a.jpg'
import lvl1bPng from '../images/dresscode/lvl1b.jpg'
import lvl2aPng from '../images/dresscode/lvl2a.jpg'
import lvl2bPng from '../images/dresscode/lvl2b.jpg'
import lvl3aPng from '../images/dresscode/lvl3a.jpg'
import lvl3bPng from '../images/dresscode/lvl3b.jpg'
import separator1Png from '../images/separator-1.png'
import PageNumber from '../common/PageNumber'

const Subtitle = styled.h3`
    font-size: 14px;
    color: ${colors.primaryLight};
    margin: 0px;
    ${BaseFont}
`

const Level = styled.h4`
    font-size: 30px;
    margin: 50px 0px 0px 0px;
    ${CursiveFont}
`

const SeeMore = styled.a`
    font-size: 18px;
    margin: 0px;
    font-weight: bold;
    ${BaseFont}
    color: ${colors.primary};
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const ImageCarouselComponents = {
    Container: styled.div`
        padding: 20px 10px;
        width: calc(100% - 20px);
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    `,
    ImageContainer: styled.div`
        width: 300px;
        height: 500px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        border-bottom: 3px solid #95aa71;
        border-top: 3px solid #95aa71;
        border-radius: 10px;
    `,
    Image: styled.img`
        height: 100%;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        pointer-events: none;
    `
}

const ImageCarousel = ({ srcs }: { srcs: string[] }) =>
    <ImageCarouselComponents.Container>
        {srcs.map((src, i) =>
            <ImageCarouselComponents.ImageContainer key={i}>
                <ImageCarouselComponents.Image src={src} />
            </ImageCarouselComponents.ImageContainer>
        )}
    </ImageCarouselComponents.Container>

const DressCode = ({ content }: { content: Content }) =>
    <SectionContainer>
        <Title>{content.dressCode.title}</Title>
        <Subtitle>{content.dressCode.subtitle}</Subtitle>
        <SeparatorImage src={separator1Png} />
        <Paragraph>{content.dressCode.message}</Paragraph>
        <Paragraph>{content.dressCode.whiteNote}</Paragraph>

        <SeparatorThin />
        <Level>{content.dressCode.level} 1</Level>
        <SeeMore href='https://pin.it/2T98oVD13' target='_blank' rel='noreferrer'>{content.dressCode.more}</SeeMore>
        <ImageCarousel srcs={[lvl1aPng, lvl1bPng]} />

        <SeparatorThin />
        <Level>{content.dressCode.level} 2</Level>
        <SeeMore href='https://pin.it/5r3CxGp2b' target='_blank' rel='noreferrer'>{content.dressCode.more}</SeeMore>
        <ImageCarousel srcs={[lvl2aPng, lvl2bPng]} />

        <SeparatorThin />
        <Level>{content.dressCode.level} 3</Level>
        <SeeMore href='https://pin.it/32QHhQbHY' target='_blank' rel='noreferrer'>{content.dressCode.more}</SeeMore>
        <ImageCarousel srcs={[lvl3aPng, lvl3bPng]} />
        <SeparatorThin />
        <PageNumber p={1} />
    </SectionContainer>

export default DressCode