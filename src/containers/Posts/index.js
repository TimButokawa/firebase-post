import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(post, key, voteType) {
    const {firebaseRef} = this.props;
    post.points = voteType === 'upVote' ? post.points + 1 : post.points - 1;
    firebaseRef.ref('posts/' + key).set({...post});
  }

  render () {
    const {posts, loading} = this.props;
    const content = loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        {Object.keys(posts).map(i => {
          return (
            <div key={i}>
              <span>{posts[i].points}</span>
              <span>{posts[i].title}</span>
              <button onClick={() => this.handleVote(posts[i], i, 'upVote')}>upvote</button>
              <button onClick={() => this.handleVote(posts[i], i, 'downVote')}>downvote</button>
            </div>
          );
        })}
      </div>
    );
    return (
      <div>
        {content}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.object,
  loading: PropTypes.bool,
  firebaseRef: PropTypes.object
};

export default Posts;
