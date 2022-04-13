import { useDispatch, useSelector } from 'react-redux'
import { test } from '../redux/actions/testAction';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.test)
  console.log(name)
  const change = () => {
    dispatch(test())
  }
  return (
    <>
      <Title>My page</Title>
      <span>이름: {name} </span>
      <button onClick={change}>버튼</button>
    </>
  )
}
