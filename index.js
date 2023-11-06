import ReactDom from 'react-dom/client';
import React, { Fragment, useState } from 'react';


const TestTag = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
    }

    return (
        <div>
            <p>{counter}</p>

            <button onClick={increment}>increment</button>
        </div>
    )
}

const Blog = (props) => {
    console.log(props);
    return props.arr.map(item =>
      <Fragment key={item}>
        <h1>{item}</h1> 
      </Fragment>
    );
}

const TestComponent = () => {
    let arr = [1, 2, 3, 4, 5, 6];

    const [flag, setFlag] = useState(true);

    const toggleFlag = () => {
        setFlag(!flag);
    }
    return (
        <div>
            Hello world
            { flag ?
                (
                    <div className='true-flag'>
                        <TestTag/>
                    </div>
                )
            :
                (
                    <div className='false-flag'>
                        <TestTag/>
                    </div>
                )
            }
            
            <button onClick={toggleFlag}>ToggleFlag</button>
            

            
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<TestComponent/>);