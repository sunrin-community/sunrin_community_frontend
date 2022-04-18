import Layout from '../../components/Layout/Layout'
import styled from 'styled-components'

// components
import BlockPostBox from '../../components/post/BlockPostBox'

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
const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
    width: 90%;
    margin: 0 auto;
`
const SectionTitle = styled.h2``
const SelectWrapper = styled.div`
    display: flex;
    gap: 1rem;
`
const Select = styled.select`
    padding: .5rem 1rem;
    outline: none;
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: .5rem;

`
const Option = styled.option``

const Recruit = () => {
    return (
        <Layout title='대회 및 프로젝트 모집'>
            <Section>
                <SectionTitle>전체 대회/프로젝트</SectionTitle>
                <SelectWrapper>
                    <Select>
                        <Option value="all">대회/프로젝트</Option>
                        <Option value="competition">대회</Option>
                        <Option value="project">프로젝트</Option>
                    </Select>
                    <Select>
                        <Option value="all">모집분야</Option>
                        <Option value="planner">기획자</Option>
                        <Option value="designer">디자이너</Option>
                        <Option value="frontend-developer">프론트엔드 개발자</Option>
                        <Option value="backend-developer">백엔드 개발자</Option>
                    </Select>
                </SelectWrapper>
                <BlockPostContainer>
                    <BlockPostBox />
                    <BlockPostBox />
                    <BlockPostBox />
                    <BlockPostBox />
                </BlockPostContainer>
            </Section>
        </Layout>
    )
}

export default Recruit