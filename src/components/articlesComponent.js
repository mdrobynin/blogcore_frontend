import React, { Component } from 'react';
import { ArticleComponent } from './articleComponent'

export class ArticlesComponent extends Component {
    componentWillMount() {
        this.props.fetchArticles();
    }

    render() {
        const articles = this.props.articles.map(article => {
            return (
                <ArticleComponent
                    key={article.id}
                    article={article}
                    onDelete={this.props.deleteArticle}></ArticleComponent>
            );
        });

        return (
            <div className="container">
                {articles}
            </div>
        );
    }
}