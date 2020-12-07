import React, {Component} from 'react';
import Button from "../Button/Button";

class AllUsers extends Component {

    state ={users:[], choseONe: null}

    constructor() {
        super();
    }

    onUser = (id) => {
        let {users} = this.state;
        let find = users.find(value => value.id === id)
        this.setState({choseONe : find})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersAPI => {
                this.setState({users:usersAPI})
            });
    }

    render() {
        let {users, choseONe} = this.state;
        return (
            <div>
                {
                    users.map(user => <Button item={user} key={user.id} onUser={this.onUser}/>)
                }
                {
                    choseONe && <h1>{choseONe.id} - {choseONe.name}</h1>
                }
            </div>
        );
    }
}

export default AllUsers;