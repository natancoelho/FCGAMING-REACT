import './style.css'
import { useRef } from 'react';

const Cursor = () => {
    const dot = useRef(null)
    const dotOutlien = useRef(null)

    return (

        <>
            <div ref={dotOutlien}  className="cursor-dot-ouline"></div>
            <div ref={dot} className="cursor-dot"></div>
        </>


    );




};



export default Cursor