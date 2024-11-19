import React from 'react';

function TodoItem({ task, onRemove }) {
    return (
        <li style={styles.taskItem}>
            <span>{task}</span>
            <button onClick={onRemove} style={styles.removeButton}>
                Remove
            </button>
        </li>
    );
}

const styles = {
    taskItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '4px',
        width: '300px',
        margin: '0 auto',
    },
    removeButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default TodoItem;
