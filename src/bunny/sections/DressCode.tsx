import styled from 'styled-components'
import { Content } from '../Content'
import { BaseFont, CursiveFont, colors } from '../CommonCss'

import lvl3aPng from '../images/dresscode/lvl3a.jpg'
import lvl3bPng from '../images/dresscode/lvl3b.jpg'
import lvl3cPng from '../images/dresscode/lvl3c.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Title = styled.h2`
    font-size: 42px;
    font-weight: bold;
    margin: 0px;
    ${CursiveFont}
`

const Subtitle = styled.h3`
    font-size: 14px;
    color: ${colors.primaryLight};
    margin: 0px;
    margin-bottom: 20px;
    ${BaseFont}
`

const Message = styled.p`
    font-size: 14px;
    margin: 0px;
    padding: 0px 20px;
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
    `,
    ImagesWrapper: styled.div`
        display: flex;
        flex-direction: row;
        gap: 10px;
    `,
    ImageContainer: styled.div`
        width: 300px;
        height: 500px;
        overflow: hidden;
        display: flex;
        justify-content: center;
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
        <ImageCarouselComponents.ImagesWrapper>
        {srcs.map(src =>
            <ImageCarouselComponents.ImageContainer>
                <ImageCarouselComponents.Image src={src} />
            </ImageCarouselComponents.ImageContainer>
        )}
        </ImageCarouselComponents.ImagesWrapper>
    </ImageCarouselComponents.Container>

const DressCode = ({ content }: { content: Content }) =>
    <Container>
        <Title>{content.dressCode.title}</Title>
        <Subtitle>{content.dressCode.subtitle}</Subtitle>
        <Message>{content.dressCode.message}</Message>

        <Level>{content.dressCode.level} 1</Level>
        <SeeMore href='https://pin.it/32QHhQbHY' target='_blank' rel='noreferrer'>{content.dressCode.more}</SeeMore>
        <ImageCarousel srcs={[lvl3aPng, lvl3bPng, lvl3cPng]} />

        <Level>{content.dressCode.level} 2</Level>
        <SeeMore href='https://pin.it/32QHhQbHY' target='_blank' rel='noreferrer'>{content.dressCode.more}</SeeMore>
        <ImageCarousel srcs={[lvl3aPng, lvl3bPng, lvl3cPng]} />

        <Level>{content.dressCode.level} 3</Level>
        <SeeMore href='https://pin.it/32QHhQbHY' target='_blank' rel='noreferrer'>{content.dressCode.more}</SeeMore>
        <ImageCarousel srcs={[lvl3aPng, lvl3bPng, lvl3cPng]} />

    </Container>

export default DressCode
