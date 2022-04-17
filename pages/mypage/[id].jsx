import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout/Layout'

const MyPage = () => {
    const router = useRouter();
    const user = router.query.id;
    return (
        <Layout title={`${user}님의 페이지`}>
            {user}
        </Layout>
    )
}

export default MyPage