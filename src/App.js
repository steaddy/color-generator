import React, {useState} from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
    const [color, setColor] = useState('#f15025');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('burlywood').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setError(false);
            let colors = new Values(color).all(10);
            setList(colors);
            console.log(colors);
        } catch (e) {
            console.log(e);
            setError(true);
        }
    };

    return (
        <>
            <section className='container'>
                <h3>Color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className={error ? 'error' : null}
                        placeholder='#f15025'
                        value={color}
                        type='text'
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <button className="btn" type='submit'>Submit</button>
                </form>
            </section>
            <section className='colors'>
                {list.map((color, index) => {
                    console.log(color);
                    return (
                        <SingleColor key={index} {...color} index={index}/>
                    );
                })}
            </section>
        </>
    );
}

export default App
