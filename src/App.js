import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Navigation from './components/Navigation';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseContext from './pages/UseContext';
import UseRef from './pages/UseRef';
import useReducer from './pages/UseReducer';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';

import './App.css';

export default function App() {
    return (
        <div className="App">
            <Navigation title="React Hooks">
                <NavLink to="/use-state">useState</NavLink>
                <NavLink to="/use-effect">useEffect</NavLink>
                <NavLink to="/use-context">useContext</NavLink>
                <NavLink to="/use-ref">useRef</NavLink>
                <NavLink to="/use-reducer">useReducer</NavLink>
                <NavLink to="/use-callback">useCallback</NavLink>
                <NavLink to="/use-memo">useMemo</NavLink>
            </Navigation>

            <Switch>
                <Route path="/use-state" component={UseState} />
                <Route path="/use-effect" component={UseEffect} />
                <Route path="/use-context" component={UseContext} />
                <Route path="/use-ref" component={UseRef} />
                <Route path="/use-reducer" component={useReducer} />
                <Route path="/use-callback" component={UseCallback} />
                <Route path="/use-memo" component={UseMemo} />
            </Switch>
        </div>
    );
}