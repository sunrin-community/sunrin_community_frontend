import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

// components
import Navbar from '../global/navbar/Navbar'

const Container = styled.div`
    width: 100%;

`
const Wrapper = styled.div`
    max-width: 1300px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
`

const Layout = ({ children, title = "선린 커뮤니티" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <Navbar />
                <Wrapper>
                    {children}
                </Wrapper>
            </Container>
        </>
    )
}

export default Layout