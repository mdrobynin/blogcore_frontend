import { connect } from 'react-redux';
import { ArticlesComponent } from '../components/articlesComponent';
import { fetchArticles } from '../actions/articlesActions';

const mapStateToProps = (state, ownProps) => ({
    articles: state.articles
});

const mapDispatchToProps = {
    fetchArticles
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesComponent);
