import styled from "styled-components"
import { CursiveFont } from "../CommonCss"
import png from '../images/Bouquet2.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
    font-size: 18px;
    ${CursiveFont}
    text-align: center;
    font-weight: bold;
    height: 120px;
    width: 100px;
    background-image: url(${png});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100px;
`

const PageNumber = ({ p }: { p: Number }) => 
    <Container>
        {p.toString()}
    </Container>

export default PageNumber
