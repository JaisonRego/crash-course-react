import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css"
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const respone = await fetch('http://localhost:8080/posts')
            const resData = await respone.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <>
            {isPosting &&
                (<Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        addPost={addPostHandler}
                    />
                </Modal>)
            }
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) =>
                        <Post key={post.id} author={post.author} description={post.description} />
                    )}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p> Loading posts...</p>
                </div>
            )}
        </>
    );
}

export default PostsList;