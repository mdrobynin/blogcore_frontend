import { connect } from 'react-redux';
import { CreateCommentComponent } from '../components/createCommentComponent';
import { createComment } from '../actions/commentsActions';

const mapDispatchToProps = {
    createComment
};

export default connect(
    null,
    mapDispatchToProps
)(CreateCommentComponent);