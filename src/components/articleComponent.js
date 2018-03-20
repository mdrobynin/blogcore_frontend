import React, { Component } from 'react';
import CreateComment from '../containers/createCommentContainer';
import Comment from '../containers/commentContainer'
import './articleComponent.css';

export class ArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    
    onEdit(e) {
        e.preventDefault();
    }
    
    onDelete(e) {
        e.preventDefault();
        this.props.onDelete(this.props.article.id);
    }
    
    render() {
        const article = this.props.article;
        const comments = article.comments.map(comment => {
            return (
                <Comment key={comment.id} comment={comment}></Comment>
            );
        });
        return (
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{article.user.username}</h6>
                        <p className="card-text">
                            {article.text}
                        </p>
                        <button className="btn btn-primary card-button" onClick={this.onEdit}>Edit</button>
                        <button className="btn btn-danger card-button" onClick={this.onDelete}>Delete</button>
                        {comments}
                        <CreateComment article={article}></CreateComment>
                    </div>
                </div>
            </div>
        );
    }
}