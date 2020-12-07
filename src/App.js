
import React, {Component} from 'react';
import AdressComponent from "./components/AdressComponent";
import {users} from "./components/User/User"


class App extends Component {

    render() {

        return (
            <div>
                {
                    users.map((user, index) => (<AdressComponent item={user} key={index}/>))
                }
            </div>
        );
    }
}

export default App;
