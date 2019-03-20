import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, fetchPost } from '../actions';
import {
    SubmitBtn,
    Title,
    FormComponent
} from '../styles';
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            user_id: -1
        };
        this.handleChange = this.handleChange.bind(this);
        this.addPost = this.addPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }
    
    componentDidMount() {
        if(!this.props.addForm){
            this.props.fetchPost(this.props.postID).then(_ => {
                this.setState({
                    text: this.props.text,
                    user_id: this.props.user_id
                });
            });
        }
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    addPost(e) {
        e.preventDefault();
        this.props.addPost({
            text: this.state.text,
            user_id: this.state.user_id
        });
    }

    updatePost(e) {
        e.preventDefault();
        this.props.updatePost({
            id: this.props.postID,
            text: this.state.text,
            user_id: this.state.user_id
        });
    }

    render() {
        return (
            <>
                <FormComponent onSubmit={this.props.addForm ? this.addPost : this.updatePost} className="card">
                    <Title>
                        {this.props.addForm && "Add post"}
                        {!this.props.addForm && "Update post"}
                    </Title>
                    
                    <input
                        type="text"
                        name="text"
                        placeholder="Post text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />

                    <input
                        type="number"
                        name="user_id"
                        placeholder="Post user id"
                        onChange={this.handleChange}
                        value={this.state.user_id}
                    />

                    <SubmitBtn
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                    />
                </FormComponent>
            </>
        );
    }
}

PostForm.propTypes = {
    text: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    addForm: PropTypes.bool.isRequired,
    addPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        text: state.posts.post ? state.posts.post.text : '',
        user_id: state.posts.post ? state.posts.post.user_id : -1,
    }
}

const mapDispatchToProps = {
    addPost,
    updatePost,
    fetchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);