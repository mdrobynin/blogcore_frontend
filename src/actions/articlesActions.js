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