import React, { useState } from 'react';

import Form from './Form';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    
    const handelSubmit = note => setNotes(notes => [...notes, note]);

    const handelClick = note => setNotes(notes => notes.filter(n => n !== note));
    
    return (
        <div>
            <h1>Notes</h1>

            <Form onSubmit={handelSubmit} />

            <ul>
                {notes.map((note, index) =>
                    <li
                        key={index}
                        onClick={() => handelClick(note)}
                    >
                        {note}
                    </li>
                )}
            </ul>
        </div>
    );
}