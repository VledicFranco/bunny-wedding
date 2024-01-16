import styled from 'styled-components'

const Separator = styled.img`
    max-width: 250px;

    @media (min-width: 700px) {
        max-width: 400px;
    }
`

const SeparatorImage = ({ src }: { src: string }) =>
    <Separator src={src} />

export default SeparatorImage
