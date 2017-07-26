import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: ''
    };
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {firebaseRef} = this.props;

    if (this.state.title.length) {
      firebaseRef.ref('posts').push({
        title: this.state.title
      });

      this.setState({
        title: ''
      });

      browserHistory.push('posts');
    }
  }

  render() {
    return(
      <form
        name="createPostForm"
        onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
            required/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
};

CreatePost.propTypes = {
  firebaseRef: PropTypes.object
};

export default CreatePost;
