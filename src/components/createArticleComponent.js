import React, { Component } from 'react';
import './createArticleComponent.css';

export class CreateArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            userId: 1, //TODO change
            imagePath: '',
            title: ''
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.text && this.state.title) {
            this.props.createArticle(this.state);
            this.setState({
                text: '',
                imagePath: '',
                title: ''
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="create-article-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="articleTitleInput">Title</label>
                            <input id="articleTitleInput" className="form-control" type="text" value={this.state.title} onChange={this.onTitleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="articleTextInput">Text</label>
                            <input id="articleTextInput" className="form-control" type="text" value={this.state.text} onChange={this.onTextChange}></input>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Add Article</button>
                    </form>
                </div>
            </div>
        );
    }
}