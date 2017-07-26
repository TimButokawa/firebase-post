import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from '../../components/Post';
import {Link} from 'react-router';

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
            <Post
              key={i}
              id={i}
              post={posts[i]}
              handleVote={this.handleVote}/>
          );
        })}
        <Link to='add-post'>Add Post</Link>
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
