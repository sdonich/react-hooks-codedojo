import React, { useState } from 'react';

export default function Form({ onSubmit }) {
    const [value, setValue] = useState('');

    const handleChange = event => setValue(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        setValue(event.target.value);
        onSubmit(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                onChange={handleChange}
            />
        </form>
    );
}