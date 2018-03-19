import { connect } from 'react-redux';
import { CreateArticleComponent } from '../components/createArticleComponent';
import { createArticle } from '../actions/articlesActions';

const mapDispatchToProps = {
    createArticle
};

export default connect(
    null,
    mapDispatchToProps
)(CreateArticleComponent);
