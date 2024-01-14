import styled from 'styled-components'

const Separator = styled.img`
    width: 70%;

    @media (min-width: 1200px) {
        width: 40%;
    }
`

const SeparatorImage = ({ src }: { src: string }) =>
    <Separator src={src} />

export default SeparatorImage
