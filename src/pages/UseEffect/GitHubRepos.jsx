import React, { useState, useEffect } from "react";

import Form from './Form';

export default function GitHubRepos() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        let didCancel = false;

        async function getPosts() {
            setIsLoading(true);
            setHasError(false);

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                const posts = await response.json();

                if (!didCancel) {
                    setPosts(posts);
                }
            } catch (error) {
                if (!didCancel) {
                    setHasError(true);
                    setError(error.message);
                }
            } finally {
                if (!didCancel) {
                    setIsLoading(false);
                }
            }
        }

        getPosts();

        return () => didCancel = true;
    }, [userId]);

    const handleSubmit = userId => setUserId(userId);
    
    return (
        <div>
            <Form
                onSubmit={handleSubmit}
            />

            {hasError && <div>Error: {error}</div>}

            {isLoading ?
                <div>...Loading</div>
                :
                <ul>
                    {posts.map(post =>
                        <li key={post.id}>{post.title}</li>    
                    )}
                </ul>
            }
        </div>
    );
}