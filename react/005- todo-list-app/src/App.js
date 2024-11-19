import React, { useState } from 'react';
import TodoItem from './TodoItem';

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>To-Do List</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a task"
                    style={styles.input}
                />
                <button onClick={addTask} style={styles.addButton}>
                    Add Task
                </button>
            </div>
            <ul style={styles.taskList}>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        onRemove={() => removeTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        color: '#333',
    },
    inputContainer: {
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '200px',
    },
    addButton: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    taskList: {
        listStyle: 'none',
        padding: 0,
    },
};

export default App;
