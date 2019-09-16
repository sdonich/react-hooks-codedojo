import React from 'react';

export default function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="counter">
            <div className="count">{count}</div>

            <div className="buttons">
                <button className="button" onClick={decrement}>-</button>
                
                <button className="button" onClick={increment}>+</button>
            </div>
        </div>
    );
}