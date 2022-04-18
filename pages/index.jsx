import styled from 'styled-components'

// components
import Layout from '../components/Layout/Layout'
import PostBox from '../components/post/PostBox'

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  width: 100%;
  margin: 0;
  @media ${({ theme }) => theme.device.mobileL} {
	width: 90%;
  	margin: 0 auto;
  }
`

export default function Home() {
	const post = {
		thumbnail: '/images/thumbnail.jpg'
	}
	const notThumbnail = {
		thumbnail: ''
	}
	return (
		<Layout>
			<PostList>
				<PostBox post={post} />
				<PostBox post={notThumbnail} />
				<PostBox />
			</PostList>
		</Layout>
	)
}
