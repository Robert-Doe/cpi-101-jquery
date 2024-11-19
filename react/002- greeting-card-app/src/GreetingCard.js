import React from 'react';

function GreetingCard({ name, message }) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                margin: '10px',
                width: '300px',
                display: 'inline-block',
            }}
        >
            <h2>Hello, {name}!</h2>
            <p>{message}</p>
        </div>
    );
}

export default GreetingCard;
