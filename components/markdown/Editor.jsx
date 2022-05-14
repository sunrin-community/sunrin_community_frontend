import styled from 'styled-components'

const EditorContainer = styled.div`
    flex: 1 1 0%;
`

const Textarea = styled.textarea``

const Editor = ({ onChange }) => {
    return (
        <EditorContainer>
            <Textarea placeholder="내용을 입력하세요" onChange={onChange} />
        </EditorContainer>
    )
}

export default Editor