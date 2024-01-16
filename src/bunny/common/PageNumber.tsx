import styled from "styled-components"
import { CursiveFont } from "../CommonCss"

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
`

const PageNumber = ({ p }: { p: Number }) => 
    <Container>
        {p.toString()}
    </Container>

export default PageNumber
