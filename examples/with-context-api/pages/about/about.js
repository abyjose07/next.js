import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useCount, useDispatchCount } from '../../components/Counter'
import ShowComponent from '../../components/ShowComponent'

const AboutPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()
  const ref = useRef(0);
  useEffect(() => {
    console.log('about useeffect');
    ref.current = ref.current + 1;
  })
  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleIncrease15 = (event) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    })

  return (
    <>
      <h1>ABOUT</h1>
      <p>Counter: {count.state}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      <h1>{count.title}</h1>
      <span>AboutPage : ref : {ref.current}</span>
      <ShowComponent></ShowComponent>
    </>
  )
}

export default AboutPage
