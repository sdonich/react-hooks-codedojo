import React, { useRef, useEffect, useContext } from 'react';

import PageContext from '../../contexts/PageContext';

import './index.css';

export default function Page({ id, children }) {
    const titleRef = useRef();
    const pages = useContext(PageContext); 
    const { title, description } = pages[id] || {};

    useEffect(() => {
        if (!titleRef.current) titleRef.current = document.title;

        return () => document.title = titleRef.current;
    }, []);

    useEffect(() => {
        document.title = `React Hooks${title ? ' - ' + title : ''}`;
    });

    return (
        <main className="Page">
            {title && <h2 className="title">{title}</h2>}
            {description && <p className="description" dangerouslySetInnerHTML={{__html: description}} />}

            {children}
        </main>
    );
}