import React, { Component } from 'react';

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
                <div className="row">
                    <div className="col-md-3">
                        <h4>Title</h4>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" value={this.state.title} onChange={this.onTitleChange}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <h4>Text</h4>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" value={this.state.text} onChange={this.onTextChange}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input className="btn btn-primary" type="submit" value="Add Article" onClick={this.onSubmit}></input>
                    </div>
                </div>
            </div>
        );
    }
}