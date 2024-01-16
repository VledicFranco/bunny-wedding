import { Content } from '../Content'
import PageNumber from '../common/PageNumber'

import Paragraph from '../common/Paragraph'
import SectionContainer from '../common/SectionContainer'
import SeparatorImage from '../common/SeparatorImage'
import SeparatorThin from '../common/SeparatorThin'
import Title from '../common/Title'
import separator3Png from '../images/separator-3.png'

const Accommodation = ({ content }: { content: Content }) =>
    <SectionContainer>
        <Title>{content.accommodation.title}</Title>
        <SeparatorImage src={separator3Png} />
        <Paragraph>{content.accommodation.message}</Paragraph>
        <SeparatorThin />
        <PageNumber p={2} />
    </SectionContainer>

export default Accommodation
