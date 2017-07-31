import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {browserHistory, Link} from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    padding: '16px'
  },
  formGroup: {
    marginBottom: '10px',
    maxWidth: '600px'
  },
  roomRight: {
    marginRight: '10px'
  }
};

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

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

  handleCancel() {
    browserHistory.push('posts');
  }

  render() {
    return(
      <Paper style={styles.container}>
        <form
          name="createPostForm"
          onSubmit={this.handleSubmit}>
          <div style={styles.formGroup}>
            <TextField
              type="text"
              name="title"
              floatingLabelText="Title"
              onChange={this.handleChange}
              value={this.state.title}
              required/>
          </div>
          <div style={styles.formGroup}>
            <TextField
              floatingLabelText="Description"
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
              multiLine
              fullWidth
              required/>
          </div>
          <div style={styles.formGroup}>
            <RaisedButton
              style={styles.roomRight}
              label="Cancel"
              type="button"
              onClick={this.handleCancel}
              secondary/>
            <RaisedButton
              label="Submit"
              primary
              type="submit"/>
          </div>
        </form>
      </Paper>
    );
  }
};

CreatePost.propTypes = {
  firebaseRef: PropTypes.object
};

export default CreatePost;
