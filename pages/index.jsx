import styled from 'styled-components'

// components
import Layout from '../components/Layout/Layout';

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  width: 100%;
  padding: 0 100px;
`

export default function Home() {
  return (
    <Layout>
      <PostList>
      </PostList>
    </Layout>
  )
}
