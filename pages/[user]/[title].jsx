import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout';

const PostPage = () => {
    const router = useRouter();
    const { title } = router.query;
    return (
        <Layout title={title}>
            <div>{title}</div>
        </Layout>
    )
}

export default PostPage