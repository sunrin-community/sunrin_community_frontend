import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'

const Enter = () => {
    const router = useRouter();
    const { state } = router.query;
    return (
        <Layout>
            {state !== 'new' ? (
                <div>
                    로그인
                </div>
            ) : (
                <div>
                    회원가입
                </div>
            )}
        </Layout>
    )
}

export default Enter