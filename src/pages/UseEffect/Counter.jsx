import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

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

// export default class Counter extends React.Component {
//     state = {
//         count: 0
//     };

//     componentDidMount() {
//         console.log('Mounted');
//     }

//     componentDidUpdate() {
//         console.log('Updated');
//     }

//     componentWillUnmount() {
//         console.log('Will unmount');
//     }

//     increment = () => this.setState(state => ({ count: state.count + 1 }));
//     decrement = () => this.setState(state => ({ count: state.count - 1 }));

//     render() {
//         const { count } = this.state;

//         return (
//             <div className="counter">
//                 <div className="count">{count}</div>
    
//                 <div className="buttons">
//                     <button className="button" onClick={this.decrement}>-</button>
                    
//                     <button className="button" onClick={this.increment}>+</button>
//                 </div>
//             </div>
//         );
//     }
// }