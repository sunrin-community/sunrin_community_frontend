import { useRouter } from 'next/router'
import Link from 'next/link'

// styled-components
import styled from 'styled-components'

// react iocns
import { IoLogoGithub, IoMail } from 'react-icons/io5'

// components
import Layout from '../../components/Layout/Layout'
import BlockPostBox from '../../components/post/BlockPostBox'
import PostBox from '../../components/post/PostBox'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    margin: 0;
    margin-bottom: 3rem;
    @media ${({ theme }) => theme.device.mobileL} {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 3rem;
    }
`
const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
`
const BlockPostContainer = styled.div`
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(1, 1fr);
    @media ${({ theme }) => theme.device.mobileL} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${({ theme }) => theme.device.tabletM} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${({ theme }) => theme.device.laptop} {
        grid-template-columns: repeat(4, 1fr);
    }
`
const ProfileTop = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
`
const ProfileLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
const ProfileImg = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
`
const NamWithDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
const Name = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`
const Description = styled.p`
    font-size: 1.25rem;
`
const ProfileMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const ProfileList = styled.li`
    display: flex;
    align-items: center;
    gap: .5rem;
`
const ProfileItem = styled.span`
    color: gray;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
const TypeSelectWrapper = styled.div``
const TypeSelect = styled.a`
    display: inline-block;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
    &.active {
        color: ${({ theme }) => theme.colors.primary};
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
`

const MyPage = () => {
    // 유저 있는지 확인 (생략)
    const router = useRouter();
    const { user, type } = router.query;
    return (
        <Layout title={`${user}님의 페이지`}>
            <Section>
                <ProfileTop>
                    <ProfileLeft>
                        <Link href={`/${user}`}>
                            <a>
                                <ProfileImg src='/images/blank_profile.png' alt='profile' />
                            </a>
                        </Link>
                        <NamWithDesc>
                            <Name>홍길동</Name>
                            <Description>웹 프론트엔드 개발을 배우고 있는 고등학생입니다.</Description>
                        </NamWithDesc>
                    </ProfileLeft>
                    <ProfileMenu>
                        <ProfileList>
                            <IoLogoGithub size={24} color="gray" />
                            <Link href="https://github.com/dhwldwld">
                                <a><ProfileItem>https://github.com/dhwldwld</ProfileItem></a>
                            </Link>
                        </ProfileList>
                        <ProfileList>
                            <IoMail size={24} color="gray" />
                            <ProfileItem>email@email.com</ProfileItem>
                        </ProfileList>
                    </ProfileMenu>
                </ProfileTop>
            </Section>
            <Section>
                <TypeSelectWrapper>
                    <Link href={`/${user}`}>
                        <TypeSelect className={type !== 'recruit' ? 'active' : ''}>게시글</TypeSelect>
                    </Link>
                    <Link href={`/${user}?type=recruit`}>
                        <TypeSelect className={type === 'recruit' ? 'active' : ''}>모집</TypeSelect>
                    </Link>
                </TypeSelectWrapper>
                {type !== 'recruit' ? (
                    <PostContainer>
                    </PostContainer>
                ) : (
                    <BlockPostContainer>
                        <BlockPostBox />
                        <BlockPostBox />
                        <BlockPostBox />
                    </BlockPostContainer>
                )}
            </Section>
        </Layout>
    )
}

export default MyPage