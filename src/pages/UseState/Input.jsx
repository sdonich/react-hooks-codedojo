import React, { useState } from 'react';

export default function Input({ onChange }) {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
        onChange(value);
    };

    return (
        <input
            value={value}
            onChange={handleChange}
        />
    );
}