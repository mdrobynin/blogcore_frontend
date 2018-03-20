import { connect } from 'react-redux';
import { ArticlesComponent } from '../components/articlesComponent';
import { fetchArticles, deleteArticle } from '../actions/articlesActions';

const mapStateToProps = (state, ownProps) => ({
    articles: state.articles
});

const mapDispatchToProps = {
    fetchArticles,
    deleteArticle
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesComponent);
