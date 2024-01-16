import styled from "styled-components"
import { CursiveFont } from "../CommonCss"
import png from '../images/bg4.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 18px;
    ${CursiveFont}
    text-align: center;
    font-weight: bold;
    height: 60px;
    width: 100px;
    background-image: url(${png});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90px;
`

const PageNumber = ({ p }: { p: Number }) => 
    <Container>
        {p.toString()}
    </Container>

export default PageNumber
