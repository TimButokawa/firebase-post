import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  render () {
    const content = this.props.loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        {this.props.posts.map((post, i) => {
          return <div key={i}>{post.title}</div>;
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
