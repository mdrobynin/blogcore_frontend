import { FETCH_ARTICLES } from './types';
import { articlesUrl } from '../config';

export const fetchArticles = () => dispatch => {
    fetch(articlesUrl)
        .then(res => res.json())
        .then(articles => {
            dispatch({
                type: FETCH_ARTICLES,
                payload: articles
            });
        });
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
            
            fetch(articlesUrl)
                .then(res => res.json())
                .then(articles => {
                    dispatch({
                        type: FETCH_ARTICLES,
                        payload: articles
                    });
                });
        });
};