import React, {useState, useEffect} from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);

        console.log(timeout);
        return ()=> clearTimeout(timeout);

    }, [alert])

    return (
        <article
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(rgbToHex(...rgb));
            }}
            className={`color ${index > 10 && 'color-light'}`}
            style={{backgroundColor: `rgb(${bcg})`}}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{rgbToHex(...rgb)}</p>
            {alert && <p className='alert'>Copied to clipboard</p>}
        </article>
    );
}

export default SingleColor
