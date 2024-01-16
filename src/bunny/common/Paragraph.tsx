import styled from "styled-components"
import { BaseFont } from "../CommonCss"

const Paragraph = styled.p`
    font-size: 14px;
    margin: 0px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 250px;
    padding: 0px 20px;
    ${BaseFont}
    text-align: justify;
`

export default Paragraph
