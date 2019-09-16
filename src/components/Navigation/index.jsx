import React from 'react';

import './index.css';

export default function Navigation({ title, children }) {
    return (
        <aside className="Navigation">
            {title && <h1 className="title">{title}</h1>}

            <nav>
                {children}
            </nav>
        </aside>
    );
}