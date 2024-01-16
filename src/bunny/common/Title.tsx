import styled from "styled-components";
import { CursiveFont } from "../CommonCss";
import SeparatorTitle from "./SeparatorTitle";

const H2 = styled.h2`
    font-size: 38px;
    margin-bottom: 20px;
    margin-top: 0px;
    font-weight: bold;
    ${CursiveFont}
`

const Title = ({ children }: { children: string }) =>
    <>
        <H2>{children}</H2>
        <SeparatorTitle />
    </>

export default Title
