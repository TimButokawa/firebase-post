import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    const {post, id, handleVote} = this.props;
    return (
      <div>
        <span>{post.points}</span>
        <button onClick={() => handleVote(post, id, 'upVote')}>upvote</button>
        <button onClick={() => handleVote(post, id, 'downVote')}>downvote</button>
        <span>{post.title}</span>
        <div>{post.body}</div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  id: PropTypes.string,
  handleVote: PropTypes.func
};

export default Post;
