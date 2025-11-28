import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <CounterButton 
                count={count}
                increase={() => setCount(count + 1)}
            />
        </div>
    );
}

export default Counter;

function CounterButton({ count, increase }) {
    return (
        <button onClick={increase}>
            Clicked {count} times 
        </button>
    );
}
