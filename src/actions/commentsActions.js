import { COMMENTS_CHANGED } from './types';
import { commentsUrl } from '../config';

export const createComment = commentData => dispatch => {
    fetch(commentsUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
        .then((res) => {
            fetchArticleComments(dispatch, commentData);
        });
};

export const deleteComment = commentData => dispatch => {
    fetch(`${commentsUrl}/${commentData.id}`, {
        method: 'DELETE'
    })
        .then((res) => {
            fetchArticleComments(dispatch, commentData);
        });
};

function fetchArticleComments(dispatch, commentData) {
    fetch(`${commentsUrl}?articleId=${commentData.articleId}`)
        .then(res => res.json())
        .then(comments => {
            dispatch({
                type: COMMENTS_CHANGED,
                payload: { comments, articleId: commentData.articleId }
            });
        });
}