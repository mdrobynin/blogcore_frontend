import { FETCH_ARTICLES, CHANGE_ARTICLE } from './types';
import { articlesUrl } from '../config';

export const fetchArticles = () => dispatch => {
    requestArticles(dispatch);
};

export const createArticle = articleData => dispatch => {
    fetch(articlesUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(articleData)
    })
        .then(res => res.json())
        .then((res) => {
            console.log('articleActions->createArticle', res);

            requestArticles(dispatch);
        });
};

export const deleteArticle = articleId => dispatch => {
    fetch(`${articlesUrl}/${articleId}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then((res) => {
            console.log('articleActions->deleteArticle', res);

            requestArticles(dispatch);
        });
}

function requestArticles(dispatch) {
    fetch(articlesUrl)
        .then(res => res.json())
        .then(articles => {
            dispatch({
                type: FETCH_ARTICLES,
                payload: articles
            });
        });
}