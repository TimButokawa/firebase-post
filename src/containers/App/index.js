import React, {Component} from 'react';
import * as firebase from 'firebase';
import config from '../../utils/firebase-config';

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.state = {
      firebaseRef: firebase.database(),
      posts: {},
      loading: true
    };
  }

  componentWillMount() {
    const {firebaseRef} = this.state;

    firebaseRef.ref('posts').on('value', posts => {
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
