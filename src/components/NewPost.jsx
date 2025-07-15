import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, addPost }) {
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    function descriptionChangeHandler(event) {
        setEnteredDescription(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            author: enteredAuthor,
            description: enteredDescription
        }
        addPost(postData)
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={descriptionChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;