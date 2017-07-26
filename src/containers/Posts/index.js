import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  render () {
    const {posts, loading} = this.props;
    const content = loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        {Object.keys(posts).map(i => {
          return <div key={i}>{posts[i].title}</div>;
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
  loading: PropTypes.bool
};

export default Posts;
