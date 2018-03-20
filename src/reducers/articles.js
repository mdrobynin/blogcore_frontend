import { FETCH_ARTICLES, COMMENTS_CHANGED } from '../actions/types'

export const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
    case COMMENTS_CHANGED:
      let article = state.find(article => article.id === action.payload.articleId);
      article.comments = action.payload.comments;
      return [...state];
    default:
      return state;
  }
}