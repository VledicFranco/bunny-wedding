import styled from 'styled-components'
import { Barlow, CursiveFont, colors } from '../CommonCss'
import { Content } from '../Content'
import SectionContainer from '../common/SectionContainer'
import bg2Png from '../images/bg2.png'
import googleMapsPng from '../images/google-maps.png'

const Container = styled(SectionContainer)`
    margin: 0px;
    padding-top: 50px;
    background-image: url(${bg2Png});
    background-repeat: no-repeat;
    background-size: 1100px;
    background-position: center;
    background-color: #f8f2ed;
`

const PickLanguage = {
    Wrapper: styled.div`
        margin-top: -10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    `,
    Button: styled.button<{ selected: boolean }>`
        border: 0px;
        background-color: transparent;
        color: ${props => props.selected ? '#bbb' : colors.primary};
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 5px;
        text-transform: uppercase; 
        ${props => props.selected ? '' : 'cursor: pointer;'}
        &:hover {
            ${props => props.selected ? '' : 'font-weight: bold;'}
        }
    `,
    Separator: styled.div`
        padding: 0px 5px;
    `,
}

const Names = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    `,
    Container: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    `,
    Name: styled.h1`
        font-size: 42px;
        font-weight: bold;
        margin: 0px;
        ${CursiveFont}
    `,
    Surname: styled.h2`
        font-size: 14px;
        font-weight: bold;
        margin: 0px;
        ${CursiveFont}
    `,
}

const Spouse = ({ name }: { name: string }) =>
    <Names.Container>
        <Names.Name>{name}</Names.Name>
    </Names.Container>

const NameInfo = ({ content }: { content: Content }) =>
    <Names.Wrapper>
        <Spouse name={content.landing.bride.name} />
        <Names.Name>&</Names.Name>
        <Spouse name={content.landing.groom.name} />
    </Names.Wrapper>

const Date = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 10px;
        ${Barlow}
    `,
    Side: styled.div`
        border-top: 2px solid ${colors.primary};
        border-bottom: 2px solid ${colors.primary};
        padding: 15px 0px;
        width: 80px;
        text-align: center;
    `,
    Filler: styled.div`
        /*width: 100px;*/
        height: 1px;
    `,
    Container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    `,
    Month: styled.span`
        font-size: 24px;
    `,
    Day: styled.span`
        font-size: 70px;
    `,
    Year: styled.span`
        font-size: 24px;
    `,
}

const DateInfo = ({ content }: { content: Content }) =>
    <Date.Wrapper>
        <Date.Filler />
        <Date.Side>
            <span>{content.landing.date.dayName}</span>
        </Date.Side>
        <Date.Container>
            <Date.Month>{content.landing.date.month}</Date.Month>
            <Date.Day>{content.landing.date.day}</Date.Day>
            <Date.Year>{content.landing.date.year}</Date.Year>
        </Date.Container>
        <Date.Side>
            <span>{content.landing.date.time}</span>
        </Date.Side>
        <Date.Filler />
    </Date.Wrapper>

const Location = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 15px;
        ${Barlow}
        &:hover {
            text-decoration: underline;
        }
    `,
    Link: styled.a`
        font-size: 18px;
        color: ${colors.primary};
        &:visited { color: ${colors.primary}; }
        text-decoration: none;
        text-transform: uppercase;
    `,
    GoogleMaps: styled.img`
        width: 30px;
    `,
}

const LocationInfo = ({ content }: { content: Content }) =>
    <Location.Wrapper>
        <a href="https://maps.app.goo.gl/JY4GCKea3aD5Kcdf7" target="_blank" rel="noreferrer">
            <Location.GoogleMaps src={googleMapsPng} />
        </a>
        <Location.Link target="_blank" rel='noreferrer' href="https://maps.app.goo.gl/JY4GCKea3aD5Kcdf7">{content.landing.location}</Location.Link>
    </Location.Wrapper>

const Description = styled.p`
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    margin: 15px;
    ${Barlow}
`

const Landing = ({ content, onPickLanguage }: { content: Content, onPickLanguage: (lang: 'en' | 'es') => void }) => 
    <Container>
        <PickLanguage.Wrapper>
            <PickLanguage.Button selected={content.lang === 'en'} onClick={() => onPickLanguage('en')}>English</PickLanguage.Button>
            <PickLanguage.Separator>|</PickLanguage.Separator>
            <PickLanguage.Button selected={content.lang === 'es'} onClick={() => onPickLanguage('es')}>Español</PickLanguage.Button>
        </PickLanguage.Wrapper>
        <NameInfo content={content} />
        <Description>{content.landing.message}</Description>
        <DateInfo content={content} />
        <LocationInfo content={content} />
    </Container>

export default Landing
