import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { SignUpAuthAction, SignInAuthAction, getUser } from '../../redux/actions/AuthAction'

// styled-components
import styled from 'styled-components'

// react icons
import { VscLock } from 'react-icons/vsc'
import { IoBagCheckOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { BiUserVoice } from 'react-icons/bi'

// components
import Layout from '../../components/Layout/Layout'

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
    left: 0;
    z-index: 1;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
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
    font-size: 1rem;
`
const FormButton = styled.input`
    width: 100%;
    height: 3rem;
    padding: .5rem;
    border: none;
    border-radius: .5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 1.125rem;
    cursor: pointer;
    &:hover {
        background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)) ${({ theme }) => theme.colors.primary};
    }
`

const Enter = () => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector((state) => state.auth)
    const router = useRouter()
    const { state } = router.query
    const [signinUser, setSigninUser] = useState({ email: '', password: '' })
    const [signupUser, setSignupUser] = useState({ name: '', username: '', email: '', password: '', cf_password: '' })

    const handleInput = (type, e) => {
        if (type === 'signin') {
            setSigninUser({
                ...signinUser,
                [e.target.name]: e.target.value
            })
        } else if (type === 'signup') {
            setSignupUser({
                ...signupUser,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (type, e) => {
        e.preventDefault()
        if (type === 'signin') {
            dispatch(SignInAuthAction(signinUser))
        } else if (type === 'signup') {
            dispatch(SignUpAuthAction(signupUser))
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            Router.push('/')
        }
    }, [isLoggedIn]);

    return (
        <Layout title={state !== 'new' ? '로그인' : '회원가입'}>
            {state !== 'new' ? (
                <FormContainer onSubmit={(e) => handleSubmit('signin', e)}>
                    <FormTitle>로그인</FormTitle>
                    <FormGroup>
                        <InputIcon>
                            <HiOutlineMail size={20} />
                        </InputIcon>
                        <FormInput
                            type="email" name="email" placeholder="이메일 입력" required
                            value={signinUser.email}
                            onChange={(e) => handleInput('signin', e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputIcon>
                            <VscLock size={20} />
                        </InputIcon>
                        <FormInput
                            type="password" name="password" placeholder="비밀번호 입력" required
                            value={signinUser.password}
                            onChange={(e) => handleInput('signin', e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormButton type="submit" value="로그인" />
                    </FormGroup>
                </FormContainer>
            ) : (
                <FormContainer onSubmit={(e) => handleSubmit('signup', e)}>
                    <FormTitle>회원가입</FormTitle>
                    <FormGroup>
                        <InputIcon>
                            <AiOutlineUser size={20} />
                        </InputIcon>
                        <FormInput type="text" name="name" placeholder="이름 입력" required
                            value={signupUser.name}
                            onChange={(e) => handleInput('signup', e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputIcon>
                            <BiUserVoice size={20} />
                        </InputIcon>
                        <FormInput type="text" name="username" placeholder="별명 입력" required
                            value={signupUser.username}
                            onChange={(e) => handleInput('signup', e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputIcon>
                            <HiOutlineMail size={20} />
                        </InputIcon>
                        <FormInput type="email" name="email" placeholder="이메일 입력" required
                            value={signupUser.email}
                            onChange={(e) => handleInput('signup', e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputIcon>
                            <VscLock size={20} />
                        </InputIcon>
                        <FormInput type="password" name="password" placeholder="비밀번호 입력" required
                            value={signupUser.password}
                            onChange={(e) => handleInput('signup', e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputIcon>
                            <IoBagCheckOutline size={20} />
                        </InputIcon>
                        <FormInput type="password" name="cf_password" placeholder="비밀번호 재입력" required
                            value={signupUser.cf_password}
                            onChange={(e) => handleInput('signup', e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormButton type="submit" value="회원가입" />
                    </FormGroup>
                </FormContainer>
            )}
        </Layout>
    )
}

export default Enter