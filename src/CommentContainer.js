import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './actions';
import {thumbDownComment} from './actions';
import {removeComment} from './actions';
import {editComment} from './actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);