import React, {Component} from 'react';
import * as firebase from 'firebase';
import config from '../../utils/firebase-config';

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.state = {
      postsRef: firebase.database().ref('posts'),
      posts: {},
      loading: true
    };
  }

  componentWillMount() {
    const {postsRef} = this.state;

    postsRef.on('value', posts => {
      this.setState({
        posts: posts.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {...this.state})}
      </div>
    );
  }
}

export default App;
