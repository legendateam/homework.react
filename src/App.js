import React, {Component} from 'react';
import Baseusers from "./Database/Database";
import {users} from "./AllUsers/AllUsers"


class App extends Component {

  render() {

    return (
        <div>
          {
            users.map((user, index) => (<Baseusers item={user} key={index}/>))
          }
        </div>
    );
  }
}

export default App;

