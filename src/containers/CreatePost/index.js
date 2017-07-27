import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {browserHistory, Link} from 'react-router';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
      body: '',
      points: 0
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {firebaseRef} = this.props;

    if (this.state.title.length) {
      firebaseRef.ref('posts').push({...this.state});

      this.setState({
        title: '',
        body: ''
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
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
            required/>
          <textarea
            placeholder="What is it about"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <Link to="/posts">View Posts</Link>
      </form>
    );
  }
};

CreatePost.propTypes = {
  firebaseRef: PropTypes.object
};

export default CreatePost;
