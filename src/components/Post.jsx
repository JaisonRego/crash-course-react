import classes from './Post.module.css'

function Post({author, description}) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{description}</p>
        </li>
    );
}

export default Post;