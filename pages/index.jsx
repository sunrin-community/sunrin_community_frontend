import styled from 'styled-components'
import matter from 'gray-matter'

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

export default function Home({ data }) {
	const listItems = data.map(blog => matter(blog).data)

	return (
		<Layout>
			<PostList>
				{listItems.map((post, i) => (
					<PostBox key={i} post={post} />
				))}
			</PostList>
		</Layout>
	)
}

export const getStaticProps = async () => {
	const fs = require('fs')

	const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')

	// markdown 파일인지 
	const posts = files.filter(fn => fn.endsWith('.md'))

	const data = posts.map(post => {
		const path = `${process.cwd()}/content/${post}`
		const rawContent = fs.readFileSync(path, {
			encoding: 'utf-8'
		})

		return rawContent
	})

	return {
		props: {
			data
		}
	}
}