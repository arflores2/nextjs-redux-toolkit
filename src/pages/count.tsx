import { useSelector } from 'react-redux'

export default function Count() {
  const count = useSelector((state) => state.counter);
  return <div>Count is: {count}</div>
}