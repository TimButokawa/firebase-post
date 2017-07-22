import React, {Component} from 'react';
import * as firebase from 'firebase';
import config from '../../utils/firebase-config';

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }

  componentWillMount() {
    const posts = firebase.database().ref('posts');

    posts.on('value', posts => {
      this.setState({
        posts: posts.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default App;
