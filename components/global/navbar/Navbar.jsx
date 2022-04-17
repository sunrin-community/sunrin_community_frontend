import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavContainer = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: 10px 0 2px 0 rgba(0,0,0,.3);
    border-top: 5px solid ${({ theme }) => theme.colors.primary};
`
const NavWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`
const NavTop = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`
const NavLinks = styled.nav`
    display: flex;
    height: 60px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
`
const Logo = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.lightPrimary};
    cursor: default;
    &:hover {
        transition: .3s;
        color: ${({ theme }) => theme.colors.primary};
    }
`
const NavInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
`
const NavGroup = styled.span`
    margin: 0 5px;
    color: ${({ theme }) => theme.colors.primary};
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
    align-items: center;
    height:  100%;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
`

const Navbar = () => {
    const router = useRouter();
    return (
        <NavContainer>
            <NavWrapper>
                <NavTop>
                    <Logo>SUNRIN_COMMUNITY</Logo>
                    <NavInfo>
                        <NavGroup>IT경영과</NavGroup>
                        3학년
                        <NavGroup>홍길동</NavGroup>님
                    </NavInfo>
                </NavTop>
            </NavWrapper>
            <NavWrapper>
                <NavLinks>
                    <NavList>
                        <NavItem>
                            <Link href="/">
                                <NavLink className={router.pathname == "/" ? "active" : null}>게시글</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/recruit">
                                <NavLink className={router.pathname == "/recruit" ? "active" : null}>대회 및 프로젝트 모집</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/write">
                                <NavLink className={router.pathname == "/write" ? "active" : null}>게시글 작성</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/mypage">
                                <NavLink className={router.pathname.includes("/mypage") ? "active" : null}>내 정보</NavLink>
                            </Link>
                        </NavItem>
                    </NavList>
                </NavLinks>
            </NavWrapper>
        </NavContainer>
    )
}

export default Navbar