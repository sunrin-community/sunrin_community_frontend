import styled from 'styled-components'

// markdown
import Markdown from '../../util/markDown'

const PreviewContainer = styled.div`
    flex: 1 1 0%;
`

const Preview = ({ value }) => {
    return (
        <PreviewContainer>
            <Markdown content={value} />
        </PreviewContainer>
    )
}

export default Preview