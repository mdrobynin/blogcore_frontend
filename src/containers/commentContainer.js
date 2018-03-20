import { connect } from 'react-redux';
import { CommentComponent } from '../components/commentComponent';
import { deleteComment } from '../actions/commentsActions';

const mapDispatchToProps = {
    deleteComment
};

export default connect(
    null,
    mapDispatchToProps
)(CommentComponent);
