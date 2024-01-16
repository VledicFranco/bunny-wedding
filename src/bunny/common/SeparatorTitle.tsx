import styled from 'styled-components'
import png from '../images/title-separator.png'

const Image = styled.img`
    margin-top: -40px;
    width: 300px;
`

const SeparatorTitle = () => <Image src={png} />

export default SeparatorTitle 
