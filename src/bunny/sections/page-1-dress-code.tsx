import styled from 'styled-components'
import { BaseFont, CursiveFont, colors } from '../CommonCss'
import { Content } from '../Content'

import { ReactNode } from 'react'
import PageNumber from '../common/PageNumber'
import Paragraph from '../common/Paragraph'
import SectionContainer from '../common/SectionContainer'
import SeparatorImage from '../common/SeparatorImage'
import SeparatorThin from '../common/SeparatorThin'
import Title from '../common/Title'
import levelPng from '../images/bg3.png'
import lvl1aPng from '../images/dresscode/lvl1a.jpg'
import lvl1bPng from '../images/dresscode/lvl1b.jpg'
import lvl2aPng from '../images/dresscode/lvl2a.jpg'
import lvl2bPng from '../images/dresscode/lvl2b.jpg'
import lvl3aPng from '../images/dresscode/lvl3a.jpg'
import lvl3bPng from '../images/dresscode/lvl3b.jpg'
import separator1Png from '../images/separator-1.png'

const Subtitle = styled.h3`
    font-size: 14px;
    color: ${colors.primaryLight};
    margin: 0px;
    ${BaseFont}
`

const LevelC = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0px;
        margin-top: 20px;
        height: 170px;
        width: 300px;
        background-image: url(${levelPng});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 220px;
    `,
    Title: styled.h4`
        font-size: 30px;
        margin: 0px;
        margin-left: 10px;
        ${CursiveFont}
    `,
    SeeMore: styled.a`
        font-size: 18px;
        margin: 0px;
        margin-left: 10px;
        font-weight: bold;
        ${BaseFont}
        color: ${colors.primary};
        text-decoration: underline;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    `
}

const Level = ({ seeMore, content, children }: { seeMore: string, content: Content, children: ReactNode }) =>
    <LevelC.Wrapper>
        <LevelC.Title>{children}</LevelC.Title>
        <LevelC.SeeMore href={seeMore} target='_blank' rel='noreferrer'>{content.dressCode.more}</LevelC.SeeMore>
    </LevelC.Wrapper>

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
        <Level seeMore='https://pin.it/2T98oVD13' content={content}>{content.dressCode.level} 1</Level>
        <ImageCarousel srcs={[lvl1aPng, lvl1bPng]} />

        <SeparatorThin />
        <Level seeMore='https://pin.it/5r3CxGp2b' content={content}>{content.dressCode.level} 2</Level>
        <ImageCarousel srcs={[lvl2aPng, lvl2bPng]} />

        <SeparatorThin />
        <Level seeMore='https://pin.it/32QHhQbHY' content={content}>{content.dressCode.level} 3</Level>
        <ImageCarousel srcs={[lvl3aPng, lvl3bPng]} />
        <SeparatorThin />
        <PageNumber p={1} />
    </SectionContainer>

export default DressCode
