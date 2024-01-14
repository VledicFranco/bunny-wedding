import styled from 'styled-components'
import { Content } from '../Content'
import { BaseFont, CursiveFont, colors } from '../CommonCss'
import googleMapsPng from '../images/google-maps.png'
import flowersBottomLeftPng from '../images/flowers-bottom-left.png'
import flowersTopRightPng from '../images/flowers-top-right.png'

const InvitationContainer = styled.div`
    border: 2px solid #dddbf9;
    margin-top: 50px;
    padding: 80px;
    border-radius: 10px;
    background-image: url(${flowersBottomLeftPng}), url(${flowersTopRightPng});
    background-position: bottom left, top right;
    background-size: 60%, 60%;
    background-repeat: no-repeat;
`

const Names = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 40px;
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

const Spouse = ({ name, surname }: { name: string, surname: string }) =>
    <Names.Container>
        <Names.Name>{name}</Names.Name>
        {/*<Names.Surname>{surname}</Names.Surname>*/}
    </Names.Container>

const NameInfo = ({ content }: { content: Content }) =>
    <Names.Wrapper>
        <Spouse name={content.landing.bride.name} surname={content.landing.bride.surname} />
        <Names.Name>&</Names.Name>
        <Spouse name={content.landing.groom.name} surname={content.landing.groom.surname} />
    </Names.Wrapper>

const Date = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        margin-bottom: 20px;
    `,
    Side: styled.div`
        border-top: 2px solid ${colors.primary};
        border-bottom: 2px solid ${colors.primary};
        padding: 15px 0px;
        width: 80px;
        ${BaseFont}
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
        ${BaseFont}
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
        <a href="https://maps.app.goo.gl/JY4GCKea3aD5Kcdf7" target="_blank">
            <Location.GoogleMaps src={googleMapsPng} />
        </a>
        <Location.Link target="_blank" href="https://maps.app.goo.gl/JY4GCKea3aD5Kcdf7">{content.landing.location}</Location.Link>
    </Location.Wrapper>

const Description = styled.p`
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
`

const Landing = ({ content }: { content: Content }) => 
    <InvitationContainer>
        <NameInfo content={content} />
        <Description>{content.landing.invitationMessage}</Description>
        <DateInfo content={content} />
        <LocationInfo content={content} />
    </InvitationContainer>

export default Landing
