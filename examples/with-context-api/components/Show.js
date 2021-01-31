import { useCount } from "./Counter"

const Show = () => {
    const count = useCount();
    return (<h1>{count.state} from show : {count.title}</h1>)
}
export default Show;