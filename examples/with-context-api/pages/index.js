import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Counter'
import Show from '../components/Show'

const IndexPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event) =>
    dispatch({
      type: 'DECREASE',
    })

  return (
    <>
      <h1>HOME</h1>
      <p>Counter: {count.state}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/about/about">
          <a>About</a>
        </Link>
      </p>
      <Show></Show>
      <h1>{count.title}</h1>
    </>
  )
}

export default IndexPage
