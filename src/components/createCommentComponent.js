import React, { Component } from 'react';
import './createCommentComponent.css';

export class CreateCommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            userId: 1, //TODO change
            articleId: this.props.article.id
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.text) {
            this.props.createComment(this.state);
            this.setState({
                text: '',
                userId: 1, //TODO change
                articleId: this.props.article.id
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="create-comment-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="commentTextInput">Comment:</label>
                            <input id="commentTextInput" className="form-control" type="textarea" value={this.state.text} onChange={this.onTextChange}></input>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm" onClick={this.onSubmit}>Add Comment</button>
                    </form>
                </div>
            </div>
        );
    }
}