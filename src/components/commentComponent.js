import React, { Component } from 'react';
import './commentComponent.css';

export class CommentComponent extends Component {
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
        this.props.deleteComment(this.props.comment);
    }
    
    render() {
        const comment = this.props.comment;
        return (
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">
                            {comment.text}
                        </p>
                        <button className="btn btn-primary card-button btn-sm" onClick={this.onEdit}>Edit</button>
                        <button className="btn btn-danger card-button btn-sm" onClick={this.onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}