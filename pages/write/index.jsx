import { useEffect, useState } from 'react'
import styled from 'styled-components'

// components
import Layout from '../../components/Layout/Layout'
import Editor from '../../components/markdown/Editor'
import Preview from '../../components/markdown/Preview'

const WriteContainer = styled.div`
	display: flex;
`

const Write = () => {
	const [content, setContent] = useState('')
	const handleContent = (e) => {
		setContent(e.target.value)
	}

	useEffect(() => {
		document.documentElement.setAttribute('data-color-mode', 'light')
	}, [])

	return (
		<Layout title='게시글 작성'>
			<WriteContainer>
				<Editor onChange={handleContent} />
				<Preview value={content} />
			</WriteContainer>
		</Layout>
	)
}

export default Write