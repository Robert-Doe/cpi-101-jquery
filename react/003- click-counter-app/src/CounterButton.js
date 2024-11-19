import React, { useState } from 'react';

function CounterButton({ label }) {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1);

    return (
        <div>
            <button onClick={handleClick}>
                {label}: {count}
            </button>
        </div>
    );
}

export default CounterButton;
