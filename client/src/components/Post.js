import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Title,
    Contents,
    Buttons,
    ButtonHalf,
    cardBorder,
    CardSingle
} from '../styles';

const Post = (props) => {
    return (
        <>
        {props.singlePost && <Card className="card" style={cardBorder}>
            <Title>{props.text}</Title>
            <Contents>{props.user_id}</Contents>
            {props.singlePost &&
            <Buttons>
                <ButtonHalf onClick={props.editPost} className="btn btn-primary">EDIT</ButtonHalf>
                <ButtonHalf onClick={props.deletePost} className="btn btn-danger">DELETE</ButtonHalf>
            </Buttons>}
        </Card>}

        {!props.singlePost && <CardSingle className="card" style={cardBorder}>
            <Title>{props.text}</Title>
            <Contents>{props.user_id}</Contents>
        </CardSingle>}
        </>
    );
}


Post.propTypes = {
    editPost: PropTypes.func,
    deletePost: PropTypes.func,
    text: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    singlePost: PropTypes.bool.isRequired
}

export default Post;