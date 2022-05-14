import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import matter from 'gray-matter'

// components
import Layout from '../../components/Layout/Layout'
import Markdown from '../../util/markDown'
import styled from 'styled-components'

const PostContainer = styled.div`
    padding: 0 1rem;
    margin: 0;
    @media ${({ theme }) => theme.device.mobileL} {
	    width: 90%;
  	    margin: 0 auto;
        padding: 0;
    }
`
const PostTitle = styled.h1`
        font-size: 3rem;
        margin-top: 0px;
        font-weight: 800;
        margin-bottom: 2rem;
        word-break: keep-all;
`
const PostInformation = styled.div`
    align-items: center;
    display: flex;
    gap: 0.5rem;
    /* justify-content: space-between; */
`
const PostUserImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
`
const PostUserInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const PostUserName = styled.a`
    cursor: pointer;
    font-weight: bold;
    transition: .3s;
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary};
    }
`
const PostCreateAt = styled.span`
    font-size: .75rem;
    font-weight: 300;
`
const PostTagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0.875rem 0;
    min-height: 0.875rem;
    row-gap: .875rem;
    column-gap: .5rem;
`
const Tag = styled.a`
    border-radius: .5rem;
    background: transparent;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;
    padding: 0.25rem .5rem;
    transition: .3s;
    cursor: pointer;
    border: solid 1px transparent;
    & span {
        color: ${({ theme }) => theme.colors.primary};
    }
    &:hover {
        border: solid 1px ${({ theme }) => theme.colors.darkPrimary};
        background-color: rgba(190, 218, 250, .5);
    }
`
const PostThumbnail = styled.img`
    max-height: 100vh;
    max-width: 100%;
    width: auto;
    height: auto;
    margin: 2rem auto 0px;
    object-fit: contain;
`
const PostContent = styled.div`
    margin-top: 5rem;
`

const PostPage = ({ markDown }) => {
    const { data, content } = matter(markDown)

    // 유저 확인 후 해당 제목의 게시물 있는지 확인
    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        document.documentElement.setAttribute('data-color-mode', 'light')
    }, [])

    return (
        <Layout title={slug}> {/* post에 title을 입력할 예정 */}
            <PostContainer>
                <PostTitle>{data.title}</PostTitle>
                <PostInformation>
                    <PostUserImg src="/images/blank_profile.png" />
                    <PostUserInfo>
                        <Link href='/dhwldwld'><PostUserName>{data.username}</PostUserName></Link>
                        <PostCreateAt>{data.date}</PostCreateAt>
                    </PostUserInfo>
                </PostInformation>
                {data.tag &&
                    <PostTagWrapper>
                        <Link href="/tags/javascript"><Tag><span>#</span>javascript</Tag></Link>
                    </PostTagWrapper>
                }
                {data.thumbnail &&
                    <PostThumbnail src={data.thumbnail} />
                }
                <PostContent>
                    <Markdown content={content} />
                </PostContent>
            </PostContainer>
        </Layout>
    )
}

export const getServerSideProps = async context => {
    const fs = require('fs')

    const { slug } = context.params

    const markDown = fs.readFileSync(`${process.cwd()}/content/${slug}.md`, 'utf-8')

    return {
        props: {
            markDown
        }
    }
}

export default PostPage