import React, { Component } from 'react';

export class ArticlesComponent extends Component {
    componentWillMount() {
        this.props.fetchArticles();
    }

    render() {
        //{id: 1, userId: 1, imagePath: "", text: "text", title: ""}
        
        const articles = this.props.articles.map(article => {
            return (
                <div className="row" key={article.id}>
                    <div className="col-md-12">
                        <h3> {article.title} </h3>
                        <p>
                            {article.text}
                        </p>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                { articles }
            </div>
        );
    }
}