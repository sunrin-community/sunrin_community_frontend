import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import styled from 'styled-components'
import { VscLock } from 'react-icons/vsc'
import { IoBagCheckOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 30rem;
    padding: 2rem;
    margin: 0 auto;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const FormTitle = styled.h4`
    font-size: 1.5rem;
`
const FormGroup = styled.div`
    position: relative;
    height: 3rem;
`
const InputIcon = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1.5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    transform: translateX(-50%);
`
const FormInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: .5rem 1rem .5rem 3rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const FormCheckBoxWrapper = styled.div``
const FormCheckBox = styled.input`
    margin-right: .5rem;
    cursor: pointer;
`
const FormCheckBoxLabel = styled.label`
    cursor: pointer;
`
const FormButton = styled.input`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: .5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    &:hover {
        background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)) ${({ theme }) => theme.colors.primary};
    }
`

const Enter = () => {
    const router = useRouter();
    const { state } = router.query;
    return (
        <Layout>
            {state !== 'new' ? (
                <FormContainer>
                    <FormTitle>로그인</FormTitle>
                    <FormGroup>
                        <InputIcon>
                            <AiOutlineUser size={20} />
                        </InputIcon>
                        <FormInput type="email" name="email" placeholder="이메일 입력" required />
                    </FormGroup>
                    <FormGroup>
                        <InputIcon>
                            <VscLock size={20} />
                        </InputIcon>
                        <FormInput type="password" name="password" placeholder="비밀번호 입력" required />
                    </FormGroup>
                    <FormCheckBoxWrapper>
                        <FormCheckBox type="checkbox" id="remember-me" name="remember" />
                        <FormCheckBoxLabel htmlFor="remember-me" >
                            30일 동안 기억하기
                        </FormCheckBoxLabel>
                    </FormCheckBoxWrapper>
                    <FormGroup>
                        <FormButton type="button" value="로그인" />
                    </FormGroup>
                </FormContainer>
            ) : ( 
                <FormContainer>
                    <FormTitle>회원가입</FormTitle>
                    <FormGroup>
                        <InputIcon>
                            <AiOutlineUser size={20} />
                        </InputIcon>
                        <FormInput type="email" name="email" placeholder="이메일 입력" required />
                    </FormGroup>
                    <FormGroup>
                        <InputIcon>
                            <VscLock size={20} />
                        </InputIcon>
                        <FormInput type="password" name="password" placeholder="비밀번호 입력" required />
                        </FormGroup>
                        <FormGroup>
                        <InputIcon>
                            <IoBagCheckOutline size={20} />
                        </InputIcon>
                        <FormInput type="password" name="confirmPassword" placeholder="비밀번호 재입력" required />
                    </FormGroup>
                    <FormGroup>
                        <FormButton type="button" value="회원가입" />
                    </FormGroup>
                </FormContainer>
            )}
        </Layout>
    )
}

export default Enter