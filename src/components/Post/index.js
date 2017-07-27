import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  container: {
    margin: '0 0 10px 0'
  },
  well: {
    padding: '5px',
    backgroundColor: '#eeeeee',
    borderRadius: '2px'
  },
  vote: {
    fontSize: '1em',
    color: '#e3e3e3',
    cursor: 'pointer',
    margin: '2px',
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none'
  }
};

class Post extends Component {
  render() {
    const {post, id, handleVote} = this.props;
    const vote = (
      <span>
        <i
          style={styles.vote}
          className="material-icons"
          onClick={() => handleVote(post, id, 'upVote')}>thumb_up</i>
        <i
          style={styles.vote}
          className="material-icons"
          onClick={() => handleVote(post, id, 'downVote')}>thumb_down</i>
      </span>
    );
    return (
      <Card style={styles.container}>
        <CardHeader
          title={post.title}
          subtitle={post.points}
          avatar={vote}
          showExpandableButton/>
        <CardText expandable>
          <div style={styles.well}>
            {post.body}
          </div>
        </CardText>
      </Card>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  id: PropTypes.string,
  handleVote: PropTypes.func
};

export default Post;
