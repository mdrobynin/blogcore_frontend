import React, { Component } from 'react';
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
        console.log(article );
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
                    </div>
                </div>
            </div>
        );
    }
}