import React from 'react';

const pages = {
    useState: {
        title: 'useState',
        description: ''
    },
    useEffect: {
        title: 'useEffect',
        description: ''
    },
    useContext: {
        title: 'useContext',
        description: ''
    },
    useRef: {
        title: 'useRef',
        description: ''
    },
    useReducer: {
        title: 'useReducer',
        description: ''
    },
    useCallback: {
        title: 'useCallback',
        description: ''
    },
    useMemo: {
        title: 'useMemo',
        description: ''
    }
};

export default React.createContext(pages);