import React from 'react'
import styled from 'styled-components'
import { FiThumbsUp } from 'react-icons/fi'
import { RiDiscussLine } from 'react-icons/ri'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    border-radius: .5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
    transition: .5s transform;
    cursor: pointer;
    &:hover {
        transform: translateY(-2px);
        box-shadow: rgba(99, 99, 99, 0.22) 0px 3px 8px;
    }
`
const ThumbNail = styled.img`
    height: 50%;
    object-fit: cover;
`
const Contents = styled.div`
    padding: 1rem 1rem;
    display: flex;
    gap: .5rem;
    flex-direction: column;
`
const Title = styled.h3`
    font-size: 1rem;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: black;
`
const Desc = styled.p`
    font-size: .875rem;
    word-break: break-word;
    height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
`
const AuthorWithComments = styled.div`
    padding: .5rem 1rem;
    display: flex;
    justify-content: space-between;
    font-size: .75rem;
    border-top: 1px solid ${({theme}) => theme.colors.gray};
    `
const Author = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`
const ImageAuthor = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
`
const InfoAuthor = styled.div`
    display: flex;
    flex-direction: column;
`
const NameAuthor = styled.span`
    font-size: .875rem;
`
const UploadTime = styled.span`
    font-size: .5rem;
    color: gray;
`
const Comments = styled.div`
    display: flex;
    gap: .5rem;
`
const StateBox = styled.div`
    display: flex;
    align-items: center;
    font-size: .875rem;
    color: gray;
    gap: .25rem;
`
const StateCount = styled.span``

const BlockPostBox = () => {
    return (
        <Container>
            <ThumbNail src='/images/block_thumbnail.jpg' />
            <Contents>
                <Title>개발자용 운동팁 5가지</Title>
                <Desc>
                    개발자용 운동팁? 그런 게 있나?🤔 싶을 수 있다.
                    하지만 놀랍게도, 하루종일 책상에 앉아 키보드를 두드리는 개발자들을 위해 최적화된 운동팁은 존재한다.
                    필자는 10년 정도의 운동선수 생활을 하면서,
                    다양한 트레이너와 코치들한테 개발자용 운동팁들을 주워들을 수 있었다. 오늘은 그걸 공개하도록 하겠다.
                </Desc>
            </Contents>
            <AuthorWithComments>
                <Author>
                    <ImageAuthor src='/images/blank_profile.png' />
                    <InfoAuthor>
                        <NameAuthor>Name</NameAuthor>
                        <UploadTime>2021. 11. 04</UploadTime>
                    </InfoAuthor>
                </Author>
                <Comments>
                    <StateBox>
                        <FiThumbsUp />
                        <StateCount>20</StateCount>
                    </StateBox>
                    <StateBox>
                        <RiDiscussLine />
                        <StateCount>20</StateCount>
                    </StateBox>
                </Comments>
            </AuthorWithComments>
        </Container>
    )
}

export default BlockPostBox
