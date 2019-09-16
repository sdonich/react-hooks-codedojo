import React from 'react';

import Page from '../../components/Page';

import Counter from './Counter';
import GitHubRepos from './GitHubRepos';

export default function UseEffect() {
    return (
        <Page id="useEffect">
            <GitHubRepos />
        </Page>
    );
}