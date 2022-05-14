import Link from 'next/link'
import styled from 'styled-components'
import { FiThumbsUp } from 'react-icons/fi'
import { RiDiscussLine } from 'react-icons/ri'

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: .5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: .5s transform;
    gap: 1.5rem;
    &:hover {
        box-shadow: rgba(99, 99, 99, 0.22) 0px 3px 8px;
        transform: translateY(-2px);
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    flex-grow: 1;
`
const Title = styled.a`
    font-size: 1.5rem;
    font-weight: 500;
    white-space: wrap;
    cursor: pointer;
    &:hover {
        transition: .3s color;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
    }
`
const Desc = styled.p`
    color: gray;
    font-weight: 300;
    height: auto;
    max-height: 6rem;
    text-overflow: ellipsis;
    overflow: hidden;
`
const AuthorWithStates = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const Author = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`
const ImageAuthor = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
`
const InfoAuthor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const NameAuthor = styled.a`
    font-size: .875rem;
    &:hover {
        transition: .3s color;
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        text-decoration: underline;
    }
`
const UploadTime = styled.span`
    font-size: .75rem;
    font-weight: 300;
`
const States = styled.div`
    display: flex;
`
const StateBox = styled.a`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .25rem .75rem;
    border-radius: .5rem;
    color: gray;
    transition: ease-in-out .2s;
    cursor: pointer;
    &:hover { 
        color: black;
        background-color: ${({ theme }) => theme.colors.gray};
    }
`
const StateCount = styled.span``
const StateName = styled.span`
    display: none;
    @media ${({ theme }) => theme.device.tabletS} {
        display: inline;
    }
`
const ThumbnailWrapper = styled.div`
    display: flex;
    align-items: center;
`
const ThumbNailImg = styled.img`
    width: 300px;
    max-height: 150px;
    border-radius: .5rem;
    object-fit: cover;
`

const PostBox = ({ post }) => {
    const username = "dhwldwld";
    const reaction = 20;
    const comment = 20;
    return (
        <Container>
            <Wrapper>
                <Link href={`/${username}/${post.slug}`}>
                    <Title>{post.title}</Title>
                </Link>
                <Desc>
                    {post.description}
                </Desc>
                <AuthorWithStates>
                    <Author>
                        <ImageAuthor src='/images/blank_profile.png' />
                        <InfoAuthor>
                            <Link href={`/${username}`}>
                                <NameAuthor>{username}</NameAuthor>
                            </Link>
                            <UploadTime>{post.date ? post.date : "" }</UploadTime> {/* date.toLocaleDateString() */}
                        </InfoAuthor>
                    </Author>
                    <States>
                        <Link href={`/${username}/title--21an`}>
                            <StateBox>
                                <FiThumbsUp />
                                <StateCount>{reaction}</StateCount>
                                <StateName>reactions</StateName>
                            </StateBox>
                        </Link>
                        <Link href={`/${username}/title--21an#comments`}>
                            <StateBox>
                                <RiDiscussLine />
                                <StateCount>{comment}</StateCount>
                                <StateName>comments</StateName>
                            </StateBox>
                        </Link>
                    </States>
                </AuthorWithStates>
            </Wrapper>
            {post.thumbnail && (
                <ThumbnailWrapper>
                    <ThumbNailImg src={post.thumbnail} />
                </ThumbnailWrapper>
            )}
        </Container>
    )
}
export default PostBox
