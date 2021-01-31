import { useEffect, useRef } from "react";

const ShowComponent = () => {
    const ref = useRef(0);
    useEffect(() => {
        ref.current = ref.current + 1;
    })
    return <span>showComponent : ref : {ref.current}</span>
}
export default ShowComponent;