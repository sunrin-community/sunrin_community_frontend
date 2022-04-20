import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosArrowDown } from 'react-icons/io'

const NavContainer = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-top: 5px solid ${({ theme }) => theme.colors.primary};
    z-index: 100;
`
const NavWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`
const NavTop = styled.div`
    display: flex;
    width: 100%;
    height: 6rem;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
`
const NavLinks = styled.nav`
    display: flex;
    height: 4rem;
    max-width: 1300px;
    margin: 0 auto;
`
const Logo = styled.h1`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.lightPrimary};
    cursor: default;
    &:hover {
        transition: .3s;
        color: ${({ theme }) => theme.colors.primary};
    }
`
const NavList = styled.ul`
    display: flex;
    height: 100%;
    align-items: center;
`
const NavItem = styled.li`
    height: 100%;
`
const NavLink = styled.a`
    display: flex;
    font-size: 1.125rem;
    align-items: center;
    height:  100%;
    padding: 0 1rem;
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.colors.primary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &.active {
        color: ${({theme}) => theme.colors.primary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
`
const NavRight = styled.div`
    display: flex;
    align-items:center;
    gap: 1rem;
`
const NavProfileDropDown = styled.div`
    position: relative;
`
const NavProfileButton = styled.button`
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: .5rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    padding: .5rem;
    cursor: pointer;
`
const ProfileImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`
const ProfileName = styled.span`
    font-size: 1rem;
`
const ProfileArrow = styled(IoIosArrowDown)`
    transform: ${({ isShown }) => isShown ? 'rotate(180deg) translateY(-10%)' : 'none'};
    font-size: 1rem;
    color: gray;
    transition: ease-in-out .3s;
`
const DropDownMenu = styled.div`
    position: absolute;
    width: 14rem;
    right: 0;
    background-color: white;
    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    margin-top: .5rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation: rotateMenu 400ms ease-in-out forwards;
    transform-origin: top center;
    @keyframes rotateMenu {
        0% {
            transform: rotateX(-90deg)
        }
        70% {
            transform: rotateX(20deg) 
        }
        100% {
            transform: rotateX(0deg) 
        }
    }
`
const DropDownProfileLink = styled.a`
    padding: .75rem 1rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.gray};
    }
`
const DropDownItem = styled.div`
    display: flex;
    flex-direction: column;
`
const DropDownLink = styled.a`
    padding: .5rem 1rem;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.gray};
        border-radius: .5rem;
    }
`
const UserName = styled.span``
const DetailText = styled.span`
    font-size: .875rem;
`
const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`
const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    padding: .5rem 1rem;
    white-space: nowrap;
    cursor: pointer;
    color: ${({ bgcolor }) => ({ theme }) => bgcolor ? theme.colors.darkPrimary : "black"};
    border: 1px solid ${({ bgcolor }) => ({ theme }) => bgcolor ? theme.colors.darkPrimary : "none"};
    &:hover {
        color: ${({ bgcolor }) => bgcolor ? 'white' : 'black'};
        background-color: ${({ bgcolor }) => ({ theme }) => bgcolor ? theme.colors.darkPrimary : theme.colors.gray};
    }
`

const Navbar = () => {
    const router = useRouter();
    const [isShown, setIsShown] = useState(false)
    const isAdmin = false;
    const user = false;
    const username = "dhwldwld";
    const pathName = router.pathname;

    const handleDropDown = () => {
        setIsShown(!isShown);
    };

    return (
        <NavContainer>
            <NavWrapper>
                <NavTop>
                    <Logo>
                        <Link href="/">
                            <a>SUNRIN_COMMUNITY</a>
                        </Link>
                    </Logo>
                    {user ? (
                        <NavRight>
                            <Link href="/write">
                                <Button bgcolor={true}>게시물 작성</Button>
                            </Link>
                            <NavProfileDropDown>
                                <NavProfileButton onClick={handleDropDown}>
                                    <ProfileImage src="/images/blank_profile.png" alt='profile' />
                                    <ProfileName>{username}</ProfileName>
                                    <ProfileArrow $isShown={isShown} />
                                </NavProfileButton>
                                {isShown && (
                                    <DropDownMenu onClick={handleDropDown}>
                                        <Link href={`/${username}`}>
                                            <DropDownProfileLink>
                                                <UserName>@{username}</UserName>
                                                <DetailText>프로필 보기</DetailText>
                                            </DropDownProfileLink>
                                        </Link>
                                        <DropDownItem>
                                            <Link href='/settings'>
                                                <DropDownLink>
                                                    설정
                                                </DropDownLink>
                                            </Link>
                                            <Link href='/'>
                                                <DropDownLink>
                                                    로그아웃
                                                </DropDownLink>
                                            </Link>
                                        </DropDownItem>
                                    </DropDownMenu>
                                )}
                            </NavProfileDropDown>
                        </NavRight>
                    ) : (
                        <ButtonWrapper>
                            <Link href='/enter'>
                                <Button bgcolor={false}>로그인</Button>
                            </Link>
                            <Link href='/enter?state=new'>
                                <Button bgcolor={true}>회원가입</Button>
                            </Link>
                        </ButtonWrapper>
                    )}
                </NavTop>
            </NavWrapper>
            <NavWrapper>
                <NavLinks>
                    <NavList>
                        <NavItem>
                            <Link href="/">
                                <NavLink className={pathName == "/" ? "active" : null}>게시글</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/recruit">
                                <NavLink className={pathName == "/recruit" ? "active" : null}>대회 및 프로젝트</NavLink>
                            </Link>
                        </NavItem>
                        {isAdmin && (
                            <NavItem>
                                <Link href="/admin">
                                    <NavLink className={pathName == "/admin" ? "active" : null}>관리자</NavLink>
                                </Link>
                            </NavItem>
                        )}
                    </NavList>
                </NavLinks>
            </NavWrapper>
        </NavContainer >
    )
}

export default Navbar