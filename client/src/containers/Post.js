import React from 'react';
import Post from '../components/Post';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <>
            <Post
                key={props.post.id}
                id={props.post.id}
                text={props.post.text}
                user_id={props.post.user_id}
                editPost={props.editPost}
                deletePost={props.deletePost}
                singlePost={true}
            />
        </>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        user_id: PropTypes.number.isRequired
    }).isRequired,
    editPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

export default PostContainer;